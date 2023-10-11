const { Schema, model } = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Task = require('./Task')

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
	},
	tasks: [Task.schema]
})

userSchema.methods.generateAccessToken = function() {
	const token = jwt.sign({
		_id: this._id.toString() ,
		}, process.env.JWT_SECRET_KEY
	)
	return token
}

userSchema.statics.findUser = async function(email, password) {
	const user = await this.findOne({ email })
	if (!user) {
		throw new Error('User not found')
	}
	const verifyPassword = await bcrypt.compare(password, user.password)
	if (!verifyPassword) {
		throw new Error('Incorrect password')
	}
	return user
} 

userSchema.pre('save', async function (next) {
	if (this.isModified('password')) {
		this.password = await bcrypt.hash(this.password, 10) 
	}
	next()
})

module.exports = model('User', userSchema)
