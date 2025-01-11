const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    lowercase: true,
    enum: ["dogs", "cats", "birds", "fish", "rabbits", "hamsters"],
  },
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
