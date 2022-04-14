import mongoose, { SchemaTypes } from "mongoose";
const { Schema, model, models } = mongoose;

export const cartItemSchema = new Schema(
    {
      product: {
        type: SchemaTypes.ObjectId,
        ref: "Product"
      },
      quantity: {
        type: Number,
        default: 1
      }
    }
);

const CartItem = models.CartItem || model("CartItem", cartItemSchema);

export default CartItem;