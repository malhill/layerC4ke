import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const cartSchema = new Schema(
    {
        products: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }]
    }
);

const Cart = models.Cart || model("Cart", cartSchema);

export default Cart;