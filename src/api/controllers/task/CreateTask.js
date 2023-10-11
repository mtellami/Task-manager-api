const Task = require('../../models/Task')

module.exports = async (req, res) => {
	try {
		const { title, description } = req.body
		const task = new Task({ title, description })

		task.validate((error) => {
			if (error) {
				throw new Error()
			}
		})
		req.user.tasks.push(task)
		await req.user.save()
		console.log('>>>>>>>>>>>>>>>>>>>>>>>>')
		res.status(201).json({ message: 'Task added successfully', taskID: task._id })
	} catch (error) {
		res.status(400).json({ message: "Bad request" })
	}
}
