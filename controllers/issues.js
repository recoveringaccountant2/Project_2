const Issue = require('../models/issue');
const Comment = require('../models/comment');

module.exports = {
    index,
    new: newIssue,
    create,
    show,
    delete: deleteIssue
};

function index(req, res) {
    Issue.find({}).sort('status').exec(function(err, issues) {
        res.render('issues/index', issues);
    });
};

function newIssue(req, res) {

    
    // res.render('issues/new', {  });
};




// function newFlight(req, res) {
//     let newIssue = new Issue();
//     let dt = newIssue.departs;
//     let destDate = `
//         ${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}T
//         ${dt.getHours().toString().padStart(2, '0')}:
//         ${dt.getMinutes().toString().padStart(2, '0')}
//         `;
//     res.render('flights/new', {destDate});
// };






function create(req, res) {
    if (req.body.departs === '') delete req.body.departs;
    Issue.create(req.body);
    res.redirect('issues');
};

// function show(req, res) {
//     Issue.findById(req.params.id, function(err, issue) {
//         Comment.find({ issue: issue._id }, function(err, comments) {
//             res.render('issues/show', {issue, comments});
//         });
//     });
// };



function show(req, res) {
    res.render('issues/show', {
      issue: Issue.getOne(req.params.id),
    //   issueNum: Issue.getAll().findIndex(issue => issue.id === parseInt(req.params.id)) + 1
    });
  }




function deleteIssue(req, res) {
    Issue.findByIdAndRemove(req.params.id, function(err, issue) {
        res.redirect('/');
    });
}
