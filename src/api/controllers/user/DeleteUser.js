const User = require('../../models/User')

module.exports = async (req, res) => {
	try {
		await User.findByIdAndRemove(req.user._id)
		res.status(204).json({ message: 'user removed successfully' }) 
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: "Internal Server Error" })
	}
}
