module.exports = async (req, res) => {
	const _id = req.params.id
	const task = req.user.tasks.find(obj => obj._id == _id)
	if (task) {
		res.status(200).json(task)
	} else {
		res.status(404).json({ message: 'Task not found' })
	}
}
