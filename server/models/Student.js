const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true},
  lastName: { type: String, required: true},
  studentID: { type: String, required: true, unique: true},
  grades: [{ course: String, grade: String }],
});
module.exports = mongoose.model("Student", studentSchema);