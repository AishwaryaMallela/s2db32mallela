var Student = require('../models/Student');
// List of all Students
exports.student_list = function(req, res) {
res.send('NOT IMPLEMENTED: Student list');
};
// for a specific Student.
exports.student_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Student detail: ' + req.params.id);
};
// Handle Student create on POST.
exports.student_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Student create POST');
};
// Handle Costume delete form on DELETE.
exports.student_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Student delete DELETE ' + req.params.id);
};
// Handle Student update form on PUT.
exports.student_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Student update PUT' + req.params.id);
};


// List of all Students
exports.student_list = async function(req, res) {
    try{
    theStudents = await Student.find();
    res.send(theStudents);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
