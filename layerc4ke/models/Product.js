import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Product = models.Product || model('Product', productSchema);

export default Product;