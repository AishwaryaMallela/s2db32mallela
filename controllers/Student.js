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
exports.student_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Student();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.student_name = req.body.student_name;
    document.student_gender = req.body.student_gender;
    document.student_id = req.body.student_id;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle Student delete form on DELETE.
exports.student_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Student delete DELETE ' + req.params.id);
};
// Handle Student update form on PUT.
exports.student_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Student update PUT' + req.params.id);
};




// VIEWS
// Handle a show all view
exports.student_view_all_Page = async function(req, res) {
    try{
    theStudents = await Student.find();
    res.render('students', { title: 'Student Search Results', results: theStudents });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
