const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("AN ERROR OCCURRED!!");
    console.log(err);
  });
// Mongoose has this thing called Operational Bufferring where we can immediately
// use the models we created instead of waiting for mongodb to connect.
// Hence we don't need to put all our code in the .then block of the connection

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // by default it's false
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive!"],
    // we can also set custom messages when an error occurs in validations
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  // meaning the type will be just an array of strings
  // will caste try to caste to string if different data type
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
    // another type of validation where an item can hype any of these
    // types in the array
  },
});

// These are instance methods. They are on the instances of products
// Use normal functions here instead of arrows
// due to behaviour of "this" keyword
productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
  // remember .save() is a "then able" type
  // so we can use await while calling
};

productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};

// These are static methods. They are on the Product class itself
productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 });
};

const Product = mongoose.model("Product", productSchema);

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Mountain Bike" });
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  await foundProduct.addCategory("Outdoors");
  console.log(foundProduct);
};

const bike = new Product({
  name: "Mountain Bike",
  price: 599.99,
  categories: ["Cycling"],
});
bike
  .save()
  .then((data) => {
    console.log("Product added successfully!");
    console.log(data);
  })
  .catch((err) => {
    console.log("An error occurred");
    console.log(err);
  });

// findProduct();
// Product.fireSale().then((res) => console.log(res));
// console.log(Product.findOne({ name: "Mountain Bike" }));

const run = async () => {
  await findProduct(); // Waits for findProduct to complete
  const result = await Product.fireSale(); // Awaits fireSale and stores the result
  console.log(result); // Logs the result
  console.log(await Product.findOne({ name: "Mountain Bike" }));
};
run();

// Product.findOneAndUpdate(
//   { name: "Tire Pump" },
//   { price: 9.99 },
//   { new: true, runValidators: true },
//   // this is added so the price is positive
//   // mongo only checks schema validations when data is created
//   // when updating we have to specify to run the validations
//   // otherwise we can put negative values in price even if
//   // we have validations set to be min: 0
// )
//   .then((data) => {
//     console.log("SUCCESS!");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("An error occurred");
//     console.log(err);
//   });
