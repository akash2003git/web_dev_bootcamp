const express = require("express");
const app = express();
const morgan = require("morgan");
// morgan is used to log information about all the requests

// this function will run on any request everytime
// app.use(() => {
//   console.log("heyy");
// });

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
  if (password === "chickennugget441") {
    next();
  }
  res.send("WRONG PASSWORD!");
};

// app.use((req, res, next) => {
//   // this will require a query string of correct password
//   // for all req of all verbs
//   const { password } = req.query;
//   if (password === "chickennugget441") {
//     next();
//   }
//   res.send("WRONG PASSWORD!");
// });

// app.use((req, res) => {
//   res.send("HIJACKED BY app.use()");
// });

// app.use((req, res, next) => {
//   console.log("This is my first middleware");
//   return next(); // u can also return next() for safety
//   // if we do not use next() here the second middleware will
//   // not run
//   console.log("This is my first middleware after calling next()");
// });
//
// app.use((req, res, next) => {
//   console.log("This is my second middleware");
//   return next();
// });
//
// app.use((req, res, next) => {
//   console.log("This is my third middleware");
//   return next();
// });

app.get("/", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  // Date was assigned to req.requestTime in the app.use()
  res.send("Home Page!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF WOOF");
});

app.get("/secret", verifyPassword, (req, res) => {
  // in this case this function will be our next() callback
  res.send("MY SECRET IS: fdsljkfsladkfjlskdjf");
});

app.use((req, res) => {
  // will match any req of any verb and will end the chain
  res.status(404).send("NOT FOUND!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
