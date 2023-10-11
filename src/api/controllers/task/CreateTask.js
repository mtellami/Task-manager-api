const Task = require('../../models/Task')

module.exports = async (req, res) => {
	try {
		const { title, description } = req.body
		const task = new Task({ title, description })

		req.user.tasks.push(task)
		await req.user.save()
		res.status(201).json({ message: 'Task added successfully', taskID: task._id })
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}
