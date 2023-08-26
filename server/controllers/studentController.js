const Student = require("../models/Student")
async function addStudent(req, res) {
	try {
		const { firstName, lastName, studentID } = req.body
		const newStudent = new Student({ firstName, lastName, studentID })
		await newStudent.save()
		res.status(201).json({ message: "Student added successfully" })
	} catch (error) {
		res.status(500).json({ error: "An error occured" })
	}
}
async function getTranscript(req, res) {
	try {
		const studentID = req.params.studentID
		const student = await Student.findOne({ studentID })
		if (!student) {
			return res.status(404).json({ error: "Student not found" })
		}
		return res.json(student.grades)
	} catch (error) {
		res.status(500).json({ error: "An error occurred" })
	}
}

async function getStudentById(studentID) {
	try {
		const student = await Student.findOne({ studentID })
		return student
	} catch (error) {
		console.log(error)
		throw error
	}
}

module.exports = { addStudent, getTranscript, getStudentById }
