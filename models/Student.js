const mongoose = require("mongoose")
const StudentSchema = mongoose.Schema({
student_name:{
    type: String,
    minLength: 4,
    maxLength:30
} ,
student_gender: String,
student_id: {
    type: Number,
    min: 10,
    max: 500}
})
module.exports = mongoose.model("student", StudentSchema)
