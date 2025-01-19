const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
  .connect("mongodb://127.0.0.1:27017/relationshipDemo")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("AN ERROR OCCURRED!!!");
    console.log(err);
  });

const userSchema = new Schema({
  username: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

// const makeTweets = async () => {
//   // const user = new User({ username: "chickenfan99", age: 61 });
//   const user = await User.findOne({ username: "chickenfan99" });
//   // const tweet1 = new Tweet({ text: "omg I love my chiecken fam", likes: 0 });
//   const tweet2 = new Tweet({ text: "chimken", likes: 21394 });
//   // tweet1.user = user;
//   tweet2.user = user;
//   user.save();
//   // tweet1.save();
//   tweet2.save();
// };
//
// makeTweets();

const findTweet = async () => {
  const t = await Tweet.find({}).populate("user");
  // "user" is name of the field to be populated not the name of the model
  console.log(t);
};

findTweet();
