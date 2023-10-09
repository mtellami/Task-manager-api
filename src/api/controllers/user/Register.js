const User = require('../../models/User')

module.exports = async (req, res) => {
	const user = new User(req.body)
	try {
		await user.save()
		if (!user) {
			throw new Error('Unable to create account')
		}
		const token = await user.generateAccessToken()
		res.status(201).json({message: 'user created successfully', access_token: token })
	} catch (error) {
		res.status(400).json({ message: 'Bad request' })
	}
}
