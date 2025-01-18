const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/relationshipDemo")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("AN ERROR OCCURRED!!!");
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  address: [
    {
      street: String,
      city: String,
      state: String,
      country: {
        type: String,
        required: true,
      },
    },
  ],
});
