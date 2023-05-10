import argparse
import torch
from PIL import Image
import numpy as np
import json

parser = argparse.ArgumentParser(
    description='Predict flower name from an image along with the probability of that name.')
parser.add_argument('image_path', help='path to image')
parser.add_argument('checkpoint', help='path to checkpoint')
parser.add_argument('--top_k', default=5, type=int,
                    help='return top K most likely classes')
parser.add_argument('--category_names', default='cat_to_name.json',
                    help='mapping of categories to real names')
parser.add_argument('--gpu', action='store_true', help='use GPU if available')

args = parser.parse_args()

print(args.checkpoint)

# Load the checkpoint
checkpoint = torch.load(args.checkpoint)

# Load the model architecture
model = checkpoint['model']

# Load the mapping of classes to indices
model.class_to_idx = checkpoint['class_to_idx']

# Use GPU if available
device = torch.device(
    "cuda" if args.gpu and torch.cuda.is_available() else "cpu")
model.to(device)

# Process the image


def process_image(image):
    ''' Scales, crops, and normalizes a PIL image for a PyTorch model,
        returns an Numpy array
    '''
    # Resize the image
    image = image.resize((256, 256))

    # Crop the image
    width, height = image.size
    new_width, new_height = 224, 224
    left = (width - new_width)/2
    top = (height - new_height)/2
    right = (width + new_width)/2
    bottom = (height + new_height)/2
    image = image.crop((left, top, right, bottom))

    # Convert to numpy array
    np_image = np.array(image)/255

    # Normalize the image
    mean = np.array([0.485, 0.456, 0.406])
    std = np.array([0.229, 0.224, 0.225])
    np_image = (np_image - mean)/std

    # Transpose the image
    np_image = np_image.transpose((2, 0, 1))

    return np_image

# Predict the class of the image


def predict(image_path, model, topk=5):
    ''' Predict the class (or classes) of an image using a trained deep learning model.
    '''
    # Open the image
    image = Image.open(image_path)

    # Process the image
    np_image = process_image(image)

    # Convert to tensor
    tensor_image = torch.from_numpy(np_image).type(torch.FloatTensor)

    # Add batch of size 1 to image
    tensor_image = tensor_image.unsqueeze(0)

    # Move image to device
    tensor_image = tensor_image.to(device)
    model.to(device)

    # Predict the class probabilities
    with torch.no_grad():
        output = model.forward(tensor_image)
        ps = torch.exp(output)
        top_p, top_class = ps.topk(topk, dim=1)

    # Convert indices to classes
    idx_to_class = {val: key for key, val in model.class_to_idx.items()}
    top_class = [idx_to_class[each] for each in top_class.cpu().numpy()[0]]

    # Convert tensor to list
    top_p = top_p.cpu().numpy()[0].tolist()

    # Convert class indices to class names
    with open(args.category_names, 'r') as f:
        cat_to_name = json.load(f)
    top_class = [cat_to_name[each] for each in top_class]

    return top_p, top_class


# Predict the class of the image and print the results
probs, classes = predict(args.image_path, model, args.top_k)
print(probs)
print(classes)
