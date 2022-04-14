var express = require('express');
var router = express.Router();
const student_controlers= require('../controllers/Student');

/* GET Student */
router.get('/', function(req, res, next) {
router.get('/', student_controlers.student_view_all_Page );
res.render('Student', { title: 'Search Results Student' });
});

module.exports = router;
