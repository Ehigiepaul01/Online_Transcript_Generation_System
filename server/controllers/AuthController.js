const User = require("../models/User")
const bcrypt = require("bcryptjs")
const JWT = require("jsonwebtoken")

const createToken = (_id) => {
	return JWT.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" })
}

async function signUp(req, res) {
	try {
		const { username, email, password } = req.body
		const hashedPassword = await bcrypt.hash(password, 10)
		const newUser = new User({ username, email, password: hashedPassword })
		await newUser.save()

		//create token
		let token = JWT.sign({ _id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" })

		res.status(201).json({ message: "User registered successfully", token })
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: "An error occured" })
	}
}
async function login(req, res) {
	try {
		const { email, password } = req.body
		const user = await User.findOne({ email })
		if (!user) {
			return res.status(401).json({ error: "Invalid Email" })
		}
		const isPasswordValid = bcrypt.compare(password, user.password)
		if (!isPasswordValid) {
			return res.status(401).json({ error: "Invalid Password" })
		}
		const token = createToken(user._id)
		res.json({ message: "Login successful", token })
	} catch (error) {
		res.status(500).json({ error: "An error occured " })
	}
}

module.exports = { signUp, login }
