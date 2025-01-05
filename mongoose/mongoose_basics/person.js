const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/peopleName")
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("AN ERROR OCCURRED!!");
    console.log(err);
  });

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
});

// this will make it so that fullName behaves like an actual property
// this property does not exist on the db at all
personSchema.virtual("fullName").get(function () {
  return `${this.first} ${this.last}`;
});

personSchema.pre("save", async function () {
  console.log("About to save!!");
});
personSchema.post("save", async function () {
  console.log("Just saved!!");
});
// when we do .save(), the "pre" will run before it
// and "post" will run after it
// can be useful when we want to run some code before or after
// doing something

const Person = mongoose.model("Person", personSchema);
