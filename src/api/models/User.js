const { Schema, model } = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Email is invalid')
			}
		}
	},
	password: {
		type: String,
		required: true,
		minLength: 8,
		trim: true
	}
})

userSchema.methods.generateAccessToken = function() {
	const token =jwt.sign({
		_id: this._id.toString() ,
		}, process.env.JWT_SECRET_KEY
	)
	return token
}

module.exports = model('User', userSchema)
