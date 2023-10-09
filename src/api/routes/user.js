const express = require('express')

// Controllers
const Register = require('../controllers/user/Register')

const router = express.Router()

router.post('/user/register', Register)

module.exports = router
