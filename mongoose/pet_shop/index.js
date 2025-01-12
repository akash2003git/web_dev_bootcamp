const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Pet = require("./models/pet");
const categories = ["dogs", "cats", "birds", "fish", "rabbits", "hamsters"];

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

mongoose
  .connect("mongodb://127.0.0.1:27017/petShop")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("AN ERROR OCCURRED!!!");
    console.log(err);
  });

app.get("/pets", async (req, res) => {
  const { category } = req.query;
  if (category) {
    const pets = await Pet.find({ category });
    res.render("pets/index.ejs", { pets, category });
  } else {
    const pets = await Pet.find({});
    res.render("pets/index.ejs", { pets, category: "All" });
  }
});

app.get("/pets/new", (req, res) => {
  res.render("pets/new.ejs", { categories });
});

app.post("/pets", async (req, res) => {
  const newPet = new Pet(req.body);
  await newPet.save();
  res.redirect("/pets");
});

app.get("/pets/:id", async (req, res) => {
  const { id } = req.params;
  const pet = await Pet.findById(id);
  res.render("pets/show.ejs", { pet });
});

app.get("/pets/:id/edit", async (req, res) => {
  const { id } = req.params;
  const pet = await Pet.findById(id);
  res.render("pets/edit.ejs", { pet, categories });
});

app.put("/pets/:id", async (req, res) => {
  const { id } = req.params;
  const pet = await Pet.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect(`/pets/${pet._id}`);
});

app.delete("/pets/:id", async (req, res) => {
  const { id } = req.params;
  const pet = await Pet.findByIdAndDelete(id);
  res.redirect("/pets");
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!!!");
});
