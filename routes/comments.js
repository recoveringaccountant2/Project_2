var express = require('express');  // include on all routes 
var router = express.Router();  // include on all routes 
const commentsCtrl = require('../controllers/comments');

/* destination routes */
router.post('/issues/:id/comments', commentsCtrl.create);

module.exports = router;
