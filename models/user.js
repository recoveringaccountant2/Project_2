const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

// The factSchema is used to embedded docs in as student doc.
// There is no model and no 'facts' collection
// const factSchema = new mongoose.Schema({
//     text: String
//   }, {
//     timestamps: true
//   });
  // One student has many facts, facts belong to one student
  // Student model, is basically going to be like your user model, in your app, 

  const userSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String // <-- This property needs to be on your user model for your project
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('User', userSchema);
  