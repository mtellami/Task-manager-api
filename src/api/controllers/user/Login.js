const User = require('../../models/User')

module.exports = async (req, res) => {
	try {
		const user = await User.findUser(
			req.body.email,
			req.body.password
		)
		const token = await user.generateAccessToken()
		res.status(200).json({
			message: 'Login successful',
			username: user.name,
			access_token: token
		})
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}
