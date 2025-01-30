/* Vendors */
import { Router } from "express";

/* Controllers */
import productController from "../controllers/product.controller.js";
import cartController from "../controllers/cart.controller.js";

const router = Router();

router.get("/", productController.index);
router.get("/carts", cartController.index);
router.post("/checkout", cartController.checkout);
router.post("/add-to-cart", productController.addToCart);
router.post("/carts/update-quantity", cartController.updateCart);
router.post("/carts/delete", cartController.deleteCartProduct);

export default router;