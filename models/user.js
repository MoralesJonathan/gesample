const mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;
// Create the userSchema with our schema class
const userSchema = new Schema({
  // user, a string, must be entered
  firstName: String,
  lastName:String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: {type: Number, required: false},
  language: { type: String, required: false },
  created_at: Date,
  updated_at: Date
});

// Create the user model using the userSchema
const user = mongoose.model("user", userSchema);

// Export the user model
module.exports = user;
