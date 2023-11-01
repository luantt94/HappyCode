import express from "express";
import { addProduct, deleteProduct } from "../controllers/products.js";

const router = express.Router();

// Add Product
// router.post("/", verifyAdmin, fileUploader.array("image"), addProduct);
router.post("/", addProduct);
// Delete Product
// router.delete('/:productId', verifyAdmin, deleteProduct);
router.delete("/:productId", deleteProduct);
export default router;
