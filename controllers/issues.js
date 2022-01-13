const Issue = require('../models/issue');

module.exports = {
    index,
    new: newIssue,
    create,
    show,
    delete: deleteIssue,
    edit,
    update
};

function index(req, res) {
    console.log('controller-->issues index() started');
    Issue.find({}).sort('currentStatus').exec(function(err, issues) {
        res.render('issues/index', {issues})
    })
    console.log('controller-->issues index() completed');   
};

function newIssue(req, res) {
    console.log('controller-->issues newIssue() started');
    res.render('issues/new');
    console.log('controller-->issues newIssue() completed');   
};

function create(req, res) {
    console.log('controller-->issues create() started');
    if (req.body.trailName === '') {
        delete req.body
    } else {
        Issue.create(req.body);
        res.redirect('issues/index');
    }
    console.log('controller-->issues create() completed');   
};

function show(req, res) {
    console.log('controller-->issues show() started');
    Issue.findById(req.params.id, function(err, issue) {
        res.render('issues/show', {issue});
        });
    console.log('controller-->issues show() completed');   
};

function deleteIssue(req, res) {
    console.log('controller-->issues deleteIssue() started');
    Issue.findByIdAndRemove(req.params.id, function(err, issue) {
        res.redirect('/');
    });
    console.log('controller-->issues deleteIssue() completed');   
}  

  function edit(req, res) {
    console.log('controller-->issues edit() started');
    Issue.findById(req.params.id, function(err, issue) {
        res.render('issues/edit', {issue});
        });
    console.log('controller-->issues edit() completed');   
};
  
function update(req, res) {
    console.log('controller-->issues update() started');
    Issue.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, issue) {
        issue.save();
        res.redirect(`/issues/${issue.id}`);
        console.log('controller-->issues update() completed');   
    });
};

// function update(id, skill) {
//     const idx = skills.findIndex(skill => skill.id === parseInt(id));
//     skill.id = parseInt(id);
//     skills.splice(idx, 1, skill);
//   }
// function update(req, res) {
//     req.body.done = req.body.done === 'on';
//     Skill.update(req.params.id, req.body);
//     res.redirect('/skills');
//   }
  



  
// function update(req, res) {
//     console.log('controller-->issues update() started');

//     // Issue.findByIdAndUpdate(req.params.id, req.body);
//     console.log(req.body, " <-- req.body");
//     console.log(req.params, " <-- req.params");
//     // res.redirect('/issues');
//     Issue.findOneAndUpdate(req.params.id, req.body, function(err, issue) {
//         issue.save()
//         console.log(issue, "this is my issue thing")  // !!  this is pulling the wrong item
//         console.log(req.body, "this is my req.body");
//         // issue.save();
//         res.render('issues/show', {issue});
//         });

//     console.log('controller-->issues update() completed');   
// };
