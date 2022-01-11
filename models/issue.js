const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const commentSchema = new Schema({
    userSubmitting: String,
    photoUrl: String,
    commentDescription: String,
});

const issueSchema = new Schema({
    userSubmitting: String,
    category: {type: String, enum: ['Fallen Tree', 'Snow', 'Ice', 'Mudslide', 'High Water', 'Other-Please Describe']},
    issueDescription: String,  // detail view
    photoUrl: String,  // detail view
    latitude: Number,  // detail view
    longitude: Number,   // detail view
    currentStatus: Boolean,
    comments: [commentSchema]  // detail view
});

module.exports = mongoose.model('Issue', issueSchema); 