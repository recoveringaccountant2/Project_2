const Issue = require('../models/issue');
// const Comment = require('../models/comment');

module.exports = {
    index,
    new: newIssue,
    create,
    show,
    delete: deleteIssue
};

function index(req, res) {
    console.log('controller-->issues index() started');


    // Issue.find().sort('status').exec(function(err, issues) {

    Issue.find({}), function(err, issueDocuments){
        res.render('issues/index', {
            title: 'Issues',
            issues: issueDocuments
        })
    }
        // .sort('status').exec(function(err, issues) {
        // res.render('issues/index', { });
        // res.render('issues/index', issues);
    console.log('controller-->issues index() completed');   
};


function newIssue(req, res) {
    console.log('controller-->issues newIssue() started');
    
    res.render('issues/new', {  });

    console.log('controller-->issues newIssue() completed');   
};



function create(req, res) {
    console.log('controller-->issues create() started');

    if (req.body.departs === '') delete req.body.departs;
    Issue.create(req.body);
    res.redirect('issues');

    console.log('controller-->issues create() completed');   
};

// function show(req, res) {
//     Issue.findById(req.params.id, function(err, issue) {
//         Comment.find({ issue: issue._id }, function(err, comments) {
//             res.render('issues/show', {issue, comments});
//         });
//     });
// };



function show(req, res) {
    console.log('controller-->issues show() started');

    res.render('issues/show', {    });

    console.log('controller-->issues show() completed');   
  }




function deleteIssue(req, res) {
    console.log('controller-->issues deleteIssue() started');

    Issue.findByIdAndRemove(req.params.id, function(err, issue) {
        res.redirect('/');
    });

    console.log('controller-->issues deleteIssue() completed');   
}
