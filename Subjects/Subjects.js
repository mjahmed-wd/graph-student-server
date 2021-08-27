const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  value: String,
  label: String
});
const Subject = mongoose.model("subject", SubjectSchema);
module.exports = Subject;
