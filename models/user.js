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
    area_of_study: {
      art: { type: Boolean, default: false },
      science: { type: Boolean, default: false },
      math: { type: Boolean, default: false },
      literature: { type: Boolean, default: false },
      liberal_arts: { type: Boolean, default: false },
      healthcare: { type: Boolean, default: false }
    },
    interests: {
      politics: { type: Boolean, default: false },
      space: { type: Boolean, default: false },
      social_media: { type: Boolean, default: false },
      music: { type: Boolean, default: false },
      sports: { type: Boolean, default: false },
      pop_culture: { type: Boolean, default: false }
    },
    hobbies: {
      cooking: { type: Boolean, default: false },
      jogging: { type: Boolean, default: false },
      bar_hopping: { type: Boolean, default: false },
      dance: { type: Boolean, default: false },
      movies: { type: Boolean, default: false },
      hiking: { type: Boolean, default: false }
    },
    assistance: {
      language: { type: Boolean, default: false },
      housing: { type: Boolean, default: false },
      currency: { type: Boolean, default: false },
      visa: { type: Boolean, default: false },
      local_connections: { type: Boolean, default: false },
      maps: { type: Boolean, default: false }
    },
    priorities: {
      academics: { type: Boolean, default: false },
      culture: { type: Boolean, default: false },
      shopping: { type: Boolean, default: false },
      sightseeing: { type: Boolean, default: false },
      spirituality: { type: Boolean, default: false },
      staying_in_touch: { type: Boolean, default: false }
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);


