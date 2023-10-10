const express = require('express')

// Controllers
const Register = require('../controllers/user/Register')
const Login = require('../controllers/user/Login')

const router = express.Router()

router.post('/user/register', Register)
router.post('/user/login', Login)

module.exports = router
