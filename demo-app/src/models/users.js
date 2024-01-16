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


const User = mongoose.models.users || mongoose.model("users", userSchema);

module.exports = User;