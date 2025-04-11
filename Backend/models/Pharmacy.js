const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    bir: Date,
    phn: String,
    pass: String
})

const userModel = mongoose.model("users", userSchema) // users is collection name
module.exports = userModel