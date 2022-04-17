var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var student_controller = require('../controllers/Student');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// STUDENT ROUTES ///
// POST request for creating a Student.
router.post('/resource/students', student_controller.student_create_post);
// DELETE request to delete Student.
router.delete('/resource/students/:id', student_controller.student_delete);
// PUT request to update Student.
router.put('/resource/students/:id',
student_controller.student_update_put);
// GET request for one Student.
router.get('/resource/students/:id', student_controller.student_detail);
// GET request for list of all Student items.
router.get('/resource/students', student_controller.student_list);
/* GET detail Student page */
router.get('/detail', student_controller.student_view_one_Page);
/* GET create Student page */
router.get('/create', student_controller.student_create_Page);
module.exports = router;
