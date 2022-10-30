const { Schema, Types, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      // need proper email validator
    },
    thoughts: {
      type: Types.ObjectId,
      ref: "Thought",
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const User = model("user", userSchema);

module.exports = User;
