import express from "express";
import {
  addProduct,
  deleteProduct,
  getDetailProduct,
} from "../controllers/products.js";

const router = express.Router();
// Get Detail Product
router.get("/:productId", getDetailProduct);
// Add Product
// router.post("/", verifyAdmin, fileUploader.array("image"), addProduct);
router.post("/", addProduct);
// Delete Product
// router.delete('/:productId', verifyAdmin, deleteProduct);
router.delete("/:productId", deleteProduct);
export default router;
