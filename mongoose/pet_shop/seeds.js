const mongoose = require("mongoose");
const Pet = require("./models/pet");

mongoose
  .connect("mongodb://127.0.0.1:27017/petShop")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("AN ERROR OCCURRED!!");
    console.log(err);
  });

const seedPets = [
  {
    name: "Golden Retriever Puppy",
    price: 1200,
    category: "dogs",
  },
  {
    name: "Persian Cat",
    price: 800,
    category: "cats",
  },
  {
    name: "Cockatiel",
    price: 150,
    category: "birds",
  },
  {
    name: "Goldfish",
    price: 20,
    category: "fish",
  },
  {
    name: "Dwarf Hamster",
    price: 25,
    category: "hamsters",
  },
  {
    name: "Netherland Dwarf Rabbit",
    price: 70,
    category: "rabbits",
  },
  {
    name: "Parakeet (Budgie)",
    price: 50,
    category: "birds",
  },
  {
    name: "Betta Fish",
    price: 15,
    category: "fish",
  },
  {
    name: "Labrador Retriever Puppy",
    price: 1000,
    category: "dogs",
  },
  {
    name: "Maine Coon Cat",
    price: 1200,
    category: "cats",
  },
];

Pet.insertMany(seedPets)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
