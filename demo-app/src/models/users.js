const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: [true, "Email required"],
    },
    password: {
        type: String,
        required: [true, "Password required"],
    },
    about: String,
    profileURL: String,
});

// Use the singular name "user" for the collection
//const User = mongoose.model("user", userSchema);


try {
    // Try to get the existing model if it exists
    User = mongoose.model("user");
  } catch (error) {
    // If the model doesn't exist, create it
    User = mongoose.model("user", userSchema);
  }
  
  module.exports = User;

module.exports = User;
