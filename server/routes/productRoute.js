import express from "express";
import { verifyUser, verifyRole } from "../middleware/authUser.js";
import { getProducts, getProductsById, createProduct, updateProduct, deleteProduct } from "../controllers/productsController.js";
const router = express.Router();

router.get("/products", verifyUser, getProducts);
router.get("/products/:id",verifyUser, getProductsById);
router.post("/products", verifyUser,createProduct);
router.delete("/products/:id",verifyUser, deleteProduct);
router.patch("/products/:id",verifyUser, updateProduct);

export default router;
