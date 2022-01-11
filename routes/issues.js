var express = require('express');  // include on all routes 
var router = express.Router();  // include on all routes 
const issuesCtrl = require('../controllers/issues');


router.get('/index', issuesCtrl.index);  // list of active issues
router.get('/new', issuesCtrl.new);  // report new issue
router.get('/:id', issuesCtrl.show);  // show details of existing issue
router.post('/', issuesCtrl.create);  // 
router.delete('/:id', issuesCtrl.delete);


// ! be sure to add a PUT route for updating issues 


module.exports = router;
