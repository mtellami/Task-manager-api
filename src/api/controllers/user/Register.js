const User = require('../../models/User')

module.exports = async (req, res) => {
	const user = new User(req.body)
	try {
		await user.save()
		if (!user) {
			throw new Error('Unable to create account')
		}
		const token = user.generateAccessToken()
		res.status(201).json({message: 'user created successfully', access_token: token })
	} catch (error) {
		if (error.code === 11000) {
			res.status(400).json({ message: 'Email already exist' })
		} else {
			res.status(400).json({ message: error._message })
		}
	}
}
