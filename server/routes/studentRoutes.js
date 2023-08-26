const express = require("express")
const router = express.Router()
const studentController = require("../controllers/studentController")
const PDFController = require("../controllers/PDFController")
// const { requireSignIn } = require("../middleware/requireSignIn")

router.get("/:studentID/transcript", studentController.getTranscript)

router.get("/:studentID/transcript/pdf", async (req, res) => {
	try {
		const studentID = req.params.studentID
		const student = await studentController.getStudentById(studentID)
		// console.log(student)
		if (!student) {
			return res.status(404).json({ error: "Student not found" })
		}
		PDFController.generatePDF(res, student)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
})
router.post("/add", studentController.addStudent)
module.exports = router
