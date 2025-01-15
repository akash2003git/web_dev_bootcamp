const express = require("express");
const app = express();
const morgan = require("morgan");

const AppError = require("./AppError");

app.use(morgan("tiny"));
app.use((req, res, next) => {
  // req.method = "GET"; // makes every single req a GET req
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use("/dogs", (req, res, next) => {
  // will run for every verb for the /dogs path
  console.log("I LOVE DOGS!!");
  next();
});

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "chickennugget") {
    next();
  }
  // Throwing an error ensures the request is interrupted,
  // and control is passed to the error-handling middleware.
  throw new AppError("password required", 401);
  // res.status(401);
  // throw new AppError(401, "We got an error!");
};

app.get("/", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  // Date was assigned to req.requestTime in the app.use()
  res.send("Home Page!");
});

app.get("/error", (req, res) => {
  chickens.fly();
});

app.get("/dogs", (req, res) => {
  res.send("WOOF WOOF");
});

app.get("/secret", verifyPassword, (req, res) => {
  // in this case this function will be our next() callback
  res.send("MY SECRET IS: fdsljkfsladkfjlskdjf");
});

app.get("/admin", (req, res) => {
  throw new AppError("You are not an Admin!", 403);
});

app.use((req, res) => {
  // will match any req of any verb and will end the chain
  res.status(404).send("NOT FOUND!");
});

// If you pass anything to the next() function (except the string 'route'),
// Express regards the current request as being an error and will skip any
// remaining non-error handling routing and middleware functions.

// app.use((err, req, res, next) => {
//   console.log("************************************");
//   console.log("*************ERROR******************");
//   console.log("************************************");
//   //res.status(500).send("OH BOY, WE GOT AN ERROR!");
//   console.log(err);
//   next(err); // calls the next error handling middleware
// });

// our custom error handling middleware
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
