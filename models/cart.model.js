import { format } from "mysql2";
import DatabaseModel from "./database.model.js";

class CartModel extends DatabaseModel{
    constructor(){
        super();
    }

    fetchAllCartProduct = async (user_id) => {
        return await this.executeQuery(format(`
            SELECT *, user_cart_products.id AS cart_id
            FROM user_cart_products 
            INNER JOIN products ON products.id = user_cart_products.product_id
            WHERE user_id = ?`, [user_id]));
    }

    fetchCartByProductId = async (product_id) => {
        return await this.executeQuery(format("SELECT * FROM user_cart_products WHERE product_id = ?", [product_id]));
    }

    updateCart = async (id, cart_data) => {
        return await this.executeQuery(format("UPDATE user_cart_products SET ? WHERE id = ?", [cart_data, id]));
    }

    deleteCartProduct = async (id) => {
        return await this.executeQuery(format("DELETE FROM user_cart_products WHERE id = ?;", [id]));
    }

    clearCartProduct = async (user_id) => {
        return await this.executeQuery(format("DELETE FROM user_cart_products WHERE user_id = ?;", [user_id]));
    }
}

export default CartModel;