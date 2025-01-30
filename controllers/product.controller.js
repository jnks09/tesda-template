import CartModel from "../models/cart.model.js";
import ProductModel from "../models/product.model.js";

class ProductController {
    index = async (req, res) => {
        const products = await new ProductModel().fetchAllProducts();

        res.render("index", { products });
    }

    addToCart = async (req, res) => {
        let status = false;
        const { product_id, quantity } = req.body;
        const cartModel = new CartModel();
        const [ cart_item ] = await cartModel.fetchCartByProductId(product_id);
        
        if(cart_item){
            const update_cart_result = await cartModel.updateCart(cart_item.id, { quantity: parseInt(cart_item.quantity) + parseInt(quantity) })    
            status = !!update_cart_result.affectedRows;
        }
        else{
            const add_to_cart_result = await new ProductModel().addToCart({
                user_id: req.session.user.id,
                product_id,
                quantity
            });
            status = !!add_to_cart_result.affectedRows;
        }

        res.json({ status });
    }
}

export default new ProductController;