import express from "express";
import {
  addProduct,
  deleteProduct,
  getDetailProduct,
  getProducts,
} from "../controllers/products.js";

const router = express.Router();

// GET Product
router.get("/", getProducts);
// Get Detail Products

router.get("/:productId", getDetailProduct);
// Add Product
// router.post("/", verifyAdmin, fileUploader.array("image"), addProduct);
router.post("/", addProduct);
// Delete Product

// router.delete('/:productId', verifyAdmin, deleteProduct);
router.delete("/:productId", deleteProduct);
export default router;
