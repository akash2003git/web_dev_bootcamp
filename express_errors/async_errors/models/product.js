const mongoose = require("mongoose");

// A schema defines the structure and rules for documents in a MongoDB collection.
// Each field has its type and optional constraints
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name cannot be blank"],
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    lowercase: true,
    enum: ["fruit", "vegetable", "dairy"],
  },
});

// A model is a wrapper for the schema, providing an interface to interact
// with the MongoDB collection.
// mongoose.model("Product", productSchema):
//   "Product": The name of the model. MongoDB automatically creates a collection
//             named products (pluralized).
//   productSchema: The schema used for this model.
const Product = mongoose.model("Product", productSchema);

// This allows the Product model to be imported into other files using require().
// The exported model can be used to create, read, update, or delete
// documents in the products collection.
module.exports = Product;
