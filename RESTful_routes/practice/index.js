const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let tweets = [
  {
    id: uuid(),
    username: "akash2003",
    tweet: "The new Elden Ring trailer was insannneeee!",
  },
  {
    id: uuid(),
    username: "gamer_girl98",
    tweet: "Just got a 15-kill streak in Warzone, feeling like a pro!",
  },
  {
    id: uuid(),
    username: "code_master",
    tweet: "Finally finished my full-stack app. Time for deployment!",
  },
  {
    id: uuid(),
    username: "travelbug",
    tweet: "Exploring the mountains this weekend. Nature is the best therapy!",
  },
  {
    id: uuid(),
    username: "foodie_john",
    tweet: "Tried a new sushi place today, and it was absolutely delicious!",
  },
];

app.get("/", (req, res) => {
  res.render("index", { tweets });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/", (req, res) => {
  const { username, tweet } = req.body;
  tweets.push({ username, tweet, id: uuid() });
  res.redirect("/");
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const tweet = tweets.find((t) => t.id === id);
  res.render("show", { tweet });
});

app.get("/:id/edit", (req, res) => {
  const { id } = req.params;
  const tweet = tweets.find((t) => t.id === id);
  res.render("edit", { tweet });
});

app.patch("/:id", (req, res) => {
  const { id } = req.params;
  const newTweet = req.body.tweet;
  const oldTweet = tweets.find((t) => t.id === id);
  oldTweet.tweet = newTweet;
  res.redirect("/");
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  tweets = tweets.filter((t) => t.id !== id);
  res.redirect("/");
});

app.listen("3000", () => {
  console.log("On port 3000!");
});

// RESTful structure example:

// | **NAME**| **PATH**           | **VERB** | **PURPOSE**
// |---------|--------------------|----------|-------------------------------------
// | Index   | /comments          | GET      | Display all comments
// | New     | /comments/new      | GET      | Form to create new comment
// | Create  | /comments          | POST     | Creates new comment on server
// | Show    | /comments/:id      | GET      | Details for one specific comment
// | Edit    | /comments/:id/edit | GET      | Form to edit specific comment
// | Update  | /comments/:id      | PATCH    | Updates specific comment on server
// | Destroy | /comments/:id      | DELETE   | Deletes specific item on server
