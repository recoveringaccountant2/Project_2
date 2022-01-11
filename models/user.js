const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const userSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String // <-- This property needs to be on your user model for your project
}, {
    timestamps: true
});
  
module.exports = mongoose.model('User', userSchema);
  