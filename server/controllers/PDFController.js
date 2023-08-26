const PDFDocument = require("pdfkit")

async function generatePDF(res, student) {
	const doc = new PDFDocument()

	res.setHeader("Content-Type", "application/pdf")
	res.setHeader("Content-Disposition", `attachment; filename=${student.studentID}_transcript.pdf`)

	doc.pipe(res)

	doc.fontSize(18).text("Student Transcript", { align: "center" })
	doc.fontSize(14).text(`Name: ${student.firstName} ${student.lastName}`)
	// console.log(doc)
	doc.fontSize(14).text(`Matric Number: ${student.studentID} `)

	doc.fontSize(14).text("Transcript details", { align: "center", underline: true })

	for (const grade of student.grades) {
		doc.text(`${grade.course}: ${grade.grade}`)
	}
	doc.end()
}
module.exports = { generatePDF }
