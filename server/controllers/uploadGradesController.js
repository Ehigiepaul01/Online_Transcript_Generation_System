const Student = require("../models/Student")

const mongoose = require("mongoose")

async function uploadGrade(req, res) {
	const { id } = req.params
	const results = req.body

	const student = await Student.findOneAndUpdate({ studentID: id }, { $set: { grades: results } })
	if (student) {
		res.status(200).json({ success: true, message: `Result uploaded successfully for the ${student.firstName}, ${student.lastName}` })
	} else {
		return res.json({ success: false, message: "An error occured." })
	}
}

module.exports = { uploadGrade }
