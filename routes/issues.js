var express = require('express');  
var router = express.Router();
const issuesCtrl = require('../controllers/issues');

router.get('/', function(req, res) {res.redirect('issues/index')});
router.get('/index', issuesCtrl.index); 
router.get('/new', issuesCtrl.new); 
router.get('/:id', issuesCtrl.show);  
router.post('/', issuesCtrl.create);  
router.delete('/:id', issuesCtrl.delete); 
router.get('/:id/edit', issuesCtrl.edit);
router.put('/:id', issuesCtrl.update);

module.exports = router;
