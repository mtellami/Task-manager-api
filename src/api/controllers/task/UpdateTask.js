module.exports = async (req, res) => {
	const updates = Object.keys(req.body)
	const taskFields = ['description', 'completed']

	const validUpdate = updates.every((update) => {
		return taskFields.includes(update)
	})

	try {
		if (!validUpdate) {
			throw new Error('Invalid updates')
		}
		const index = req.user.tasks.findIndex(task => task._id == req.params.id)
		if (index == -1) {
			throw new Error('Task not found')
		}
		const task = req.user.tasks[index]
		req.user.tasks[index].description = req.body.description ? req.body.description : task.description
		req.user.tasks[index].completed = req.body.completed ? req.body.completed : task.completed
		await req.user.save()
		res.status(200).json({ message: 'task updated successfully' })
	} catch (error) {
		res.status(400).json({ message: error._message })
	}
}
