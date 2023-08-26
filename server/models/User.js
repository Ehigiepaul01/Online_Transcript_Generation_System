const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
	username: { type: String, require: true },
	email: { type: String, require: true, unique: true },
	password: { type: String, require: true },
	role: { type: Number, enum: [0, 1], default: 0 }
})
module.exports = mongoose.model("User", userSchema)
