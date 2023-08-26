const express = require("express")
const router = express.Router()
const studentController = require("../controllers/studentController")
const PDFController = require("../controllers/PDFController")
const { uploadGrade } = require("../controllers/uploadGradesController")

// const { requireSignIn } = require("../middleware/requireSignIn")

router.post("/grades/:id", uploadGrade)

module.exports = router
