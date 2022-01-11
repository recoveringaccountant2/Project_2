const Issue = require('../models/issue');
// const Comment = require('../models/comment');

module.exports = {
    new: newComment,
    create,
    delete: deleteComment
};

function newComment(req, res) {
    console.log('controller-->comments newComment() started');
    res.render('comments/new', {issuesId: req.params.id});
    console.log('controller-->comments newComment() completed');
};

function create(req, res) {
    console.log('controller-->comments create() started');
    issueId = req.params.id;
    req.body.issue = issueId;
    Comment.create(req.body, function(err, comment) {
        res.redirect(`/issues/${issueId}`);
    });
    console.log('controller-->comments create() completed');
};

function deleteComment(req, res) {
    console.log('controller-->comments deleteComment() started');
    Comment.findById(req.params.id).populate('issue').exec(function(err, comment) {
        Comment.findByIdAndDelete(req.params.id, function(err) {
            res.redirect(`/issues/${comment.issue._id}`);
        });
    });
    console.log('controller-->comments deleteComment() completed');
}