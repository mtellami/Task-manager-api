const express = require('express')
const router = express.Router()

// Controllers
const GetAllTasks = require('../controllers/task/GetAllTasks')
const CreateTask = require('../controllers/task/CreateTask')
const GetSingleTask = require('../controllers/task/GetSingleTask')
const UpdateTask = require('../controllers/task/UpdateTask')
const DeleteTask = require('../controllers/task/DeleteTask')

router.route('/')
	.get(GetAllTasks)
	.post(CreateTask)

router.route('/:id')
	.get(GetSingleTask)
	.patch(UpdateTask)
	.delete(DeleteTask)

module.exports = router
