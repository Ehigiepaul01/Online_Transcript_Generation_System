const dotenv = require("dotenv")
const express = require("express")
const mongoose = require("mongoose")
const authRoutes = require("./routes/authRoutes")
const studentRoutes = require("./routes/studentRoutes")
const uploadRoutes = require("./routes/uploadRoutes")

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

const db = async () => {
	await mongoose.connect(process.env.MONGO_URL)
}
db()
app.use(express.json())
app.get("/")
app.use("/auth", authRoutes)
app.use("/students", studentRoutes)
app.use("/upload", uploadRoutes)
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`)
})
