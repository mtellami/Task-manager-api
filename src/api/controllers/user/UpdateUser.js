module.exports = async (req, res) => {
	const updates = Object.keys(req.body)
	const userFields = ['name', 'email', 'password']

	const validOperation = updates.every((update) => {
		return userFields.includes(update)
	})

	try {
		if (!validOperation || !Object.keys(req.body).length) {
			throw new Error()
		}
		updates.forEach((update) => {
			req.user[update] = req.body[update]
		})
		await req.user.save()
		res.status(200).json({ message: 'User updated successfully' })
	} catch (error) {
		res.status(400).json({ message: 'Bad request' })
	}
}
