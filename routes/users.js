const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb+srv://roshankumarcse26:Qwert321@cluster0.mkoh8ty.mongodb.net/Pintrest");
const userSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  dp: { type: String },
  email: { type: String, required: true },
  fullname: { type: String },
});

userSchema.plugin(plm);
module.exports = mongoose.model("User", userSchema); 