const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const commentSchema = new Schema({
    userSubmitting: String,
    photoUrl: String,
    commentDescription: String,
});

const issueSchema = new Schema({
    userSubmitting: String,
    trailName: String,
    category: {type: String, enum: ['Fallen Tree', 'Snow', 'Ice', 'Mudslide', 'High Water', 'Other-Please Describe']},
    issueDescription: String,  
    photoUrl: String,  
    latitude: String,  
    longitude: String,  
    currentStatus: {type: String, enum: ['Active', 'Closed']},
    comments: [commentSchema]  
});

module.exports = mongoose.model('Issue', issueSchema); 