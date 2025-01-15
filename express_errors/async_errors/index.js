const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const AppError = require("./AppError");

const Product = require("./models/product");
const categories = ["fruit", "vegetable", "dairy"];

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand2")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("AN ERROR OCCURRED!!");
    console.log(err);
  });

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/products", async (req, res, next) => {
  try {
    // console.log(products);
    // res.send("Products printed in console");
    const { category } = req.query;
    if (category) {
      const products = await Product.find({ category });
      res.render("products/index", { products, category });
    } else {
      const products = await Product.find({});
      res.render("products/index", { products, category: "All" });
    }
  } catch (e) {
    next(e);
  }
});

app.get("/products/new", (req, res) => {
  res.render("products/new", { categories });
});

app.post("/products", async (req, res, next) => {
  // console.log(req.body);
  // res.send("making your product");
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
  } catch (e) {
    next(e);
  }
});

// This function is often used to handle errors in asynchronous route handlers,
// passing them to the next function automatically.
function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((e) => next(e));
  };
}

// For errors returned from asynchronous functions invoked by route handlers
// and middleware, you must pass them to the next() function, where Express
// will catch and process them.
app.get(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    // console.log(product);
    // res.send("Product printed in console");
    if (!product) {
      throw new AppError("Product not found", 404);
    }
    res.render("products/show", { product });
  }),
);

app.get(
  "/products/:id/edit",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError("Product not found", 404);
    }
    res.render("products/edit", { product, categories });
  }),
);

app.put(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    // console.log(req.body);
    // res.send("PUT!!");
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.redirect(`/products/${product._id}`);
  }),
);

app.delete(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    // res.send("product deleted");
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.redirect("/products");
  }),
);

const handleValidationErr = (err) => {
  console.dir(err);
  return new AppError(`Validation Failed...${err.message}`, 400);
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    err = handleValidationErr(err);
  }
  next(err);
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!");
});
