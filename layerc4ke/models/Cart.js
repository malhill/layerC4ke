import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const cartSchema = new Schema(
    {
        productName: {
            type: String
        },
        productPrice: {
            type: Number
        },
        productImage: {
            type: String
        },
        productQuantity: {
            type: Number
        }
    }
);

const Cart = models.Cart || model("Cart", cartSchema);

export default Cart;