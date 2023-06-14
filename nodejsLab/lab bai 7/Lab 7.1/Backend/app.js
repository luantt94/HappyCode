const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const router = express.Router();
const Product = require("./models/product");
// const productsData = JSON.parse(fs.readFileSync("./product.json"));

app.get("/api/products", (req, res) => {
  console.log("aaaa");
  const productsData = JSON.parse(
    fs.readFileSync(
      "D:/HappyCode/nodejsLab/lab bai 7/Lab 7.1/Backend/product.json"
    )
  );
  res.json(productsData);
});

app.post("/products", async (req, res) => {
  console.log("sssss");
  const { title, image, price, description } = req.body;
  const product = new Product(title, image, price, description);
  await product.save();
  res.send(product);
});
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
