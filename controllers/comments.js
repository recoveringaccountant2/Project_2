const Issue = require('../models/issue');

module.exports = {
    create,
};

function create(req, res) {
    console.log('controller-->comments create() started');
    Issue.findById(req.params.id, function(err, issue) {
        issue.comments.push(req.body);
        issue.save(function(err) {
            res.redirect(`/issues/${issue._id}`);
        });
    });
        console.log('controller-->comments create() completed');
};
