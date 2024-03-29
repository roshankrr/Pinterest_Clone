const mongoose = require("mongoose");
const { stringify } = require("querystring");

mongoose.connect("mongodb+srv://roshankumarcse26:Qwert321@cluster0.mkoh8ty.mongodb.net/Pintrest");

const postSchema = mongoose.Schema({
  imageText: { type: String  },
  image: {type: String},
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now() },
  likes: { type: Array, default: [] },
});

module.exports = mongoose.model("Post", postSchema);
