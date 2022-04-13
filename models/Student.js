const mongoose = require("mongoose")
const StudentSchema = mongoose.Schema({
student_name: String,
student_gender: String,
student_id: String
})
module.exports = mongoose.model("Student", StudentSchema)
