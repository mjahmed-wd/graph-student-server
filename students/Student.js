const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  dateOfBirth: String,
  takenSubjects: String,
});
const Student = mongoose.model("student", StudentSchema);
module.exports = Student;
