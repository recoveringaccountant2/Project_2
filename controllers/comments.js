const Issue = require('../models/issue');
const Comment = require('../models/comment');

module.exports = {
    new: newComment,
    create,
    delete: deleteComment
};

function newComment(req, res) {
    res.render('comments/new', {issuesId: req.params.id});
};

function create(req, res) {
    issueId = req.params.id;
    req.body.issue = issueId;
    Comment.create(req.body, function(err, comment) {
        res.redirect(`/issues/${issueId}`);
    });
};

function deleteComment(req, res) {
    Comment.findById(req.params.id).populate('issue').exec(function(err, comment) {
        Comment.findByIdAndDelete(req.params.id, function(err) {
            res.redirect(`/issues/${comment.issue._id}`);
        });
    });
}