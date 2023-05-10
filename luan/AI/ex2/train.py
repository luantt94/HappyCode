import torch
from torch import nn, optim
from torchvision import datasets, transforms, models
import argparse


parser = argparse.ArgumentParser(
    description='Train a neural network on a dataset of flower images')

parser.add_argument('data_dir', type=str,
                    help='Path to the directory containing the image data')
parser.add_argument('--save_dir', type=str,
                    help='Path to the directory where the trained model will be saved', default='.')
parser.add_argument('--arch', type=str,
                    help='Name of the pre-trained model architecture to use', default='vgg16')
parser.add_argument('--learning_rate', type=float,
                    help='Learning rate for the optimizer', default=0.001)
parser.add_argument('--hidden_units', type=int,
                    help='Number of units in the hidden layer', default=512)
parser.add_argument('--epochs', type=int,
                    help='Number of epochs to train the model', default=20)
# parser.add_argument('--gpu', action='store_true', help='Use GPU for training')
parser.add_argument('--gpu', action='store_const', const=True,
                    default=False, help='Use GPU for training if available')

args = parser.parse_args()

# Print out the values of the arguments
print('Data directory:', args.data_dir)
print('Save directory:', args.save_dir)
print('Model architecture:', args.arch)
print('Learning rate:', args.learning_rate)
print('Number of hidden units:', args.hidden_units)
print('Number of epochs:', args.epochs)
print('Use GPU:', args.gpu)

data_dir = args.data_dir
train_dir = data_dir + '/train'
valid_dir = data_dir + '/valid'
test_dir = data_dir + '/test'

# Define transforms for the training, validation, and testing sets
train_transforms = transforms.Compose([transforms.RandomRotation(30),
                                       transforms.RandomResizedCrop(224),
                                       transforms.RandomHorizontalFlip(),
                                       transforms.ToTensor(),
                                       transforms.Normalize([0.485, 0.456, 0.406],
                                                            [0.229, 0.224, 0.225])])

valid_transforms = transforms.Compose([transforms.Resize(256),
                                       transforms.CenterCrop(224),
                                       transforms.ToTensor(),
                                       transforms.Normalize([0.485, 0.456, 0.406],
                                                            [0.229, 0.224, 0.225])])

test_transforms = transforms.Compose([transforms.Resize(256),
                                      transforms.CenterCrop(224),
                                      transforms.ToTensor(),
                                      transforms.Normalize([0.485, 0.456, 0.406],
                                                           [0.229, 0.224, 0.225])])

# Load the datasets with ImageFolder
train_dataset = datasets.ImageFolder(
    train_dir, transform=train_transforms)
valid_dataset = datasets.ImageFolder(
    valid_dir, transform=valid_transforms)
test_dataset = datasets.ImageFolder(test_dir, transform=test_transforms)

# Define the dataloaders
trainloader = torch.utils.data.DataLoader(
    train_dataset, batch_size=64, shuffle=True)
validloader = torch.utils.data.DataLoader(valid_dataset, batch_size=32)
testloader = torch.utils.data.DataLoader(test_dataset, batch_size=32)

# Load the pre-trained model
model = models.vgg16(pretrained=True)

# Freeze the parameters of the pre-trained model
for param in model.parameters():
    param.requires_grad = False

# Define a new, untrained classifier
classifier = nn.Sequential(nn.Linear(25088, 4096),
                           nn.ReLU(),
                           nn.Dropout(p=0.5),
                           nn.Linear(4096, 102),
                           nn.LogSoftmax(dim=1))

# Replace the classifier in the pre-trained model with the new classifier
model.classifier = classifier

# Define the loss function and optimizer
criterion = nn.NLLLoss()
optimizer = optim.Adam(model.classifier.parameters(), lr=0.001)

# Train the classifier
epochs = 5
steps = 0
running_loss = 0
print_every = 10


if args.gpu and torch.cuda.is_available():
    device = torch.device("cuda")
else:
    device = torch.device("cpu")
model = model.to(device)

for epoch in range(epochs):
    for inputs, labels in trainloader:
        steps += 1
        # Move input and label tensors to the default device
        inputs, labels = inputs.to(device), labels.to(device)
        optimizer.zero_grad()
        logps = model.forward(inputs)
        loss = criterion(logps, labels)
        loss.backward()
        optimizer.step()
        running_loss += loss.item()

        if steps % print_every == 0:
            valid_loss = 0
            accuracy = 0
            model.eval()
            with torch.no_grad():
                for inputs, labels in validloader:
                    inputs, labels = inputs.to(device), labels.to(device)
                    logps = model.forward(inputs)
                    batch_loss = criterion(logps, labels)
                    valid_loss += batch_loss.item()

                    # Calculate accuracy
                    ps = torch.exp(logps)
                    top_p, top_class = ps.topk(1, dim=1)
                    equals = top_class == labels.view(*top_class.shape)
                    accuracy += torch.mean(equals.type(torch.FloatTensor)).item()

            print(f"Epoch {epoch+1}/{epochs}.. "
                  f"Train loss: {running_loss/print_every:.3f}.. "
                  f"Validation loss: {valid_loss/len(validloader):.3f}.. "
                  f"Validation accuracy: {accuracy/len(validloader):.3f}")
            running_loss = 0
            model.train()

# Save the checkpoint
checkpoint = {
    'model': model,
    'arch': args.arch,
    'class_to_idx': train_dataset.class_to_idx,
    'state_dict': model.state_dict(),
    'optimizer_state_dict': optimizer.state_dict(),
    'criterion_state_dict': criterion.state_dict(),
    'hidden_units': args.hidden_units,
    'learning_rate': args.learning_rate,
    'epochs': args.epochs
}
torch.save(checkpoint, args.save_dir + '/checkpoint3.pth')
print("Finish!")
