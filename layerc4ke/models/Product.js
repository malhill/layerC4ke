import mongoose from "mongoose";
// import formatMoney from "../lib/formatMoney";
const { Schema, model, models } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true,
    },
    sizes: {
      type: [String]
    },
    quantity: Number
  },
  {
    toJSON: { getters: true },
  }
);

const Product = models.Product || model("Product", productSchema);

export default Product;
