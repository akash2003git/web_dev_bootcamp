const mongoose = require("mongoose");
const Product = require("./product");
const { Schema } = mongoose;

const farmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Farm must have a name!"],
  },
  city: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email required"],
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

// farmSchema.pre("findOneAndDelete", async function (data) {
//   console.log("PRE MIDDLEWARE");
//   console.log(data);
// });
// farmSchema.post("findOneAndDelete", async function (data) {
//   console.log("POST MIDDLEWARE");
//   console.log(data);
// });
// Here we only have acess to the data in the "post" middleware and not the "pre"

farmSchema.post("findOneAndDelete", async function (farm) {
  if (farm.products.length) {
    const res = await Product.deleteMany({ _id: { $in: farm.products } });
    console.log(res);
  }
});

// The `farmSchema.post("findOneAndDelete")` middleware ensures data integrity by
// automatically deleting all `Product` documents associated with a deleted `Farm`
// document. It runs after a farm is deleted and checks if the farm has related product
// IDs (`farm.products`). If so, it uses `Product.deleteMany` to remove those products from
// the database, preventing orphaned records.

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;
