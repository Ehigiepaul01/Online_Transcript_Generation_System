const Student = require("../models/Student")

const mongoose = require("mongoose")

async function uploadGrade(req, res) {
	const { id } = req.params
	const results = req.body
	console.log(results)
	// const grades = [{ course: String, grade: String }]
	// const student = await Student.findById(id)
	const student = await Student.findByIdAndUpdate(id, { $set: { grades: results, ...results } })
	// Model.findByIdAndUpdate(id, { name: 'jason bourne' }, options)
	let studentGrades = student.grades

	console.log(studentGrades)
}

module.exports = { uploadGrade }
/*
{
  
  "": "A",
  "Chemistry": "C",
  "Biology": "B",
  "English Language": "E",
  "Civic Education": "C"
},
*/
