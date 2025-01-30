import CartModel from "../models/cart.model.js";
import ProductModel from "../models/product.model.js";

class CartController {
    index = async (req, res) => {
        const cart_products = await new CartModel().fetchAllCartProduct(req.session.user.id);
        console.log(cart_products)
        res.render("cart", { products: cart_products });
    }

    updateCart = async (req, res) => {
        const { cart_id, quantity } = req.body;
        const cart_products = await new CartModel().updateCart(cart_id, { quantity });
        
        res.json({ status: !!cart_products.affectedRows })
    }

    deleteCartProduct = async (req, res) => {
        const delete_cart_products = await new CartModel().deleteCartProduct(req.body.cart_id);
        
        res.json({ status: !!delete_cart_products.affectedRows })
    }
}

export default new CartController;