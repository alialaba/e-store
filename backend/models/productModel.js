import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    subcategory: {type: String, required: true},
    sizes: {type: Array, required: true},
    image: {type:[ String], required: true},
    bestseller: {type: Boolean},
    date: {type: Number, required: true}

})

const productModel = mongoose.model.product || mongoose.model("product", productSchema);
export default productModel;