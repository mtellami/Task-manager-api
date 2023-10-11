const express = require('express')
const router = express.Router()

// Controllers
const GetAllTasks = require('../controllers/task/GetAllTasks')
const CreateTask = require('../controllers/task/CreateTask')

router.route('/')
	.get(GetAllTasks)
	.post(CreateTask)

module.exports = router
