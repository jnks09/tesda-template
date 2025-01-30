import { format } from "mysql2";
import DatabaseModel from "./database.model.js";

class ProductModel extends DatabaseModel{
    constructor(){
        super();
    }

    fetchAllProducts = async () => {
        return await this.executeQuery("SELECT * FROM products");
    }

    addToCart = async (product_data) => {
        return await this.executeQuery(format("INSERT INTO user_cart_products SET ?", [product_data]));
    }
}

export default ProductModel;