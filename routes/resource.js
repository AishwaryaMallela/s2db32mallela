var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var student_controller = require('../controllers/student');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// STUDENT ROUTES ///
// POST request for creating a Student.
router.post('/student', student_controller.student_create_post);
// DELETE request to delete Student.
router.delete('/student/:id', student_controller.student_delete);
// PUT request to update Student.
router.put('/student/:id',student_controller.student_update_put);
// GET request for one Student.
router.get('/student/:id', student_controller.student_detail);
// GET request for list of all Student items.
router.get('/student', student_controller.student_list);


module.exports = router;
