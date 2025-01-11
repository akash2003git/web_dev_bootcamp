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
  const pets = await Pet.find({});
  res.render("pets/index.ejs", { pets });
});

app.get("/pets/new", (req, res) => {
  res.render("pets/new.ejs", { categories });
});

app.post("/pets", async (req, res) => {
  const newPet = new Pet(req.body);
  await newPet.save();
  res.redirect("/pets");
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!!!");
});
