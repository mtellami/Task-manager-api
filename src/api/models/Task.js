const { Schema, model } = require('mongoose')

const taskSchema = new Schema({
	title: {
		type: String,
		required: true,
		trim: true,
		maxLength: 20,
	},
	description: {
		type: String,
		trim: true,
		maxLength: 100
	},
	completed: {
		type: Boolean,
		default: false
	}
})

module.exports = model('Task', taskSchema)
