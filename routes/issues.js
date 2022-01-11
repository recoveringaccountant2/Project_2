var express = require('express');  // include on all routes 
var router = express.Router();  // include on all routes 
const issuesCtrl = require('../controllers/issues');

/* flight routes */
router.get('/', issuesCtrl.index);
router.get('/new', issuesCtrl.new);
router.get('/:id', issuesCtrl.show);
router.post('/', issuesCtrl.create);
router.delete('/:id', issuesCtrl.delete);

module.exports = router;
