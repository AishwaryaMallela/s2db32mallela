var express = require('express');
const student_controlers= require('../controllers/student');
var router = express.Router();


/* GET Student */
router.get('/', student_controlers.student_view_all_Page );
/* GET detail Student page */
 router.get('/detail', student_controlers.student_view_one_Page);
/* GET create Student page */
router.get('/create', student_controlers.student_create_Page);
/* GET update Student page */
router.get('/update', student_controlers.student_update_Page);
/* GET delete Student page */
router.get('/delete', student_controlers.student_delete_Page);
module.exports = router;
