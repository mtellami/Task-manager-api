const express = require('express')
const router = express.Router()
const auth = require('../midlleware/auth')

// Controllers
const Register = require('../controllers/user/Register')
const Login = require('../controllers/user/Login')
const Profile = require('../controllers/user/Profile')
const UpdateUser = require('../controllers/user/UpdateUser')
const DeleteUser = require('../controllers/user/DeleteUser')

// Routes
const taskRoutes = require('./task')

router.post('/user/register', Register)
router.post('/user/login', Login)

router.use(auth)

router.route('/user/me')
	.get(Profile)
	.patch(UpdateUser)
	.delete(DeleteUser)

router.use('/task', taskRoutes)

module.exports = router
