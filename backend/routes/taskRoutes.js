const express = require('express')
const router = express.Router()
const { getTask, setTask, updateTask, deleteTask } = require('../controllers/myControllers.js')

router.route('/').get(getTask).post(setTask)

router.route('/:id').put(updateTask).delete(deleteTask)

module.exports = router

