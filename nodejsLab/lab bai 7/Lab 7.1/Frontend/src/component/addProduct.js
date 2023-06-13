import "./addProduct.css";
import { Form, useNavigation, json, redirect } from "react-router-dom";
const AddProduct = ({ method, event }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method={method} className="add-product">
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="text"
          name="price"
          required
          defaultValue={event ? event.price : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Add Product"}
        </button>
      </div>
    </Form>
  );
};

export default AddProduct;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  console.log(eventData);

  let url = "http://localhost:5000/products";

  if (method === "PATCH") {
    const eventId = params.eventId;
    url = "http://localhost:5000/products/" + eventId;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  return redirect("/");
}
