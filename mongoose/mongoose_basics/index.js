const mongoose = require("mongoose");
// The mongoose library is imported, which provides a straightforward way
// to interact with a MongoDB database in a Node.js environment.
// It offers a higher-level abstraction with features like schema definition,
// validation, and query helpers.

mongoose
  .connect("mongodb://127.0.0.1:27017/movieApp")
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("AN ERROR OCCURRED!!");
    console.log(err);
  });
// `mongoose.connect()` establishes a connection to a MongoDB database
// using a provided URI (e.g., `mongodb://127.0.0.1:27017/movieApp`).

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

// now we make a model using this schema
const Movie = mongoose.model("Movie", movieSchema);
// the name of the model ("Movie" in this case) needs to be singular
// and the first letter should be uppercase
// mongooose then will change the name and make a collection called
// "movies" in this case
// const amadeus = new Movie({
//   title: "Amadeus",
//   year: 1984,
//   score: 10,
//   rating: "R",
// });
// amadeus.save() // to save the movie in the db

Movie.deleteMany({}).then(() => console.log("Collection cleared!"));
Movie.insertMany([
  { title: "Amelie", year: 2001, score: 8.3, rating: "R" },
  { title: "Alien", year: 1979, score: 8.1, rating: "R" },
  { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" },
  { title: "Stand By Me", year: 1986, score: 8.6, rating: "R" },
  { title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13" },
]).then((data) => {
  console.log("Movies inserted successfully!");
  console.log(data);
});
