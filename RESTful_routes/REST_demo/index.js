const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
// uuid(); ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const methodOverride = require("method-override");
// Lets you use HTTP verbs such as
// PUT or DELETE in places where the client doesn't support it.

app.use(express.urlencoded({ extended: true }));
// parses incoming requests with urlencoded payloads
app.use(express.json());
// parses incoming requests with json payloads
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

// Our fake database:
let comments = [
  {
    id: uuid(),
    username: "Todd",
    comment: "lol that is so funny!",
  },
  {
    id: uuid(),
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: uuid(),
    username: "Sk8erBoi",
    comment: "Plz delete your account, Todd",
  },
  {
    id: uuid(),
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  // finds the first comment that matches the id
  res.render("comments/show", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  // here we filter out the comment we want to delte and make a new array
  // this is a good practice as we are not mutating the original array
  res.redirect("/comments");
});

// app.get("/tacos", (req, res) => {
//   res.send("GET /tacos response");
// });
//
// app.post("/tacos", (req, res) => {
//   const { meat, qty } = req.body;
//   res.send(`<h1>Here are your ${qty} ${meat} tacos</h1>`);
// });

app.listen(3000, () => {
  console.log("ON PORT 3000!");
});

// RESTful structure example:
//
// | **NAME**| **PATH**           | **VERB** | **PURPOSE**
// |---------|--------------------|----------|-------------------------------------
// | Index   | /comments          | GET      | Display all comments
// | New     | /comments/new      | GET      | Form to create new comment
// | Create  | /comments          | POST     | Creates new comment on server
// | Show    | /comments/:id      | GET      | Details for one specific comment
// | Edit    | /comments/:id/edit | GET      | Form to edit specific comment
// | Update  | /comments/:id      | PATCH    | Updates specific comment on server
// | Destroy | /comments/:id      | DELETE   | Deletes specific item on server
