const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const router = express.Router();
const Product = require("./models/product");
const productsData = JSON.parse(fs.readFileSync("./product.json"));

app.get("/api/products", (req, res) => {
  res.json(productsData);
});

router.post("/products", async (req, res) => {
  const { name, description, price, image } = req.body;
  const product = new Product({
    name,
    description,
    price,
    image,
  });
  await product.save();
  res.send(product);
});
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
