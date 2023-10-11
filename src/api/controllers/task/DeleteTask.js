module.exports = async (req, res) => {
	const _id = req.params.id
	try {
		const index = req.user.tasks.findIndex(task => task._id == _id)
		if (index == -1) {
			throw new Error('Task not found')
		}
		req.user.tasks.splice(index, 1);
		await req.user.save()
		res.status(200).json({ message: 'Task deleted successfully' })
	} catch (error) {
		res.status(400).json({ message: error._message })
	}
}
