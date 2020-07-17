const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    from_location: { type: String },
    to_location: { type: String },
    education: { type: String },
    area_of_study: { type: Array },
    interests: { type: Array },
    hobbies: { type: Array },
    assistance: { type: Array },
    priorities: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);
