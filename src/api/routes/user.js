const express = require('express')
const auth = require('../midlleware/auth')

// Controllers
const Register = require('../controllers/user/Register')
const Login = require('../controllers/user/Login')

const router = express.Router()

router.post('/user/register', Register)
router.post('/user/login', Login)

router.use(auth)

module.exports = router
