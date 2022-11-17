const asyncHandler = require('express-async-handler')
const Task = require('../models/taskModel')

// @desc Get tasks
// @route GET /api/tasks
const getTask = asyncHandler(async (req, res) => {
    const tasks = await Task.find()
    res.status(200).json({message: 'Get task'})
})

//@desc Set tasks
//@route SET /api/tasks
const setTask = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const task = await Task.create({
        text: req.body.text,

    })
    res.status(200).json({message:'Set goal'})
})

//@desc Put tasks
//@route PUT /api/tasks
const updateTask= asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)
    if(!task) {
        res.status(400)
        throw new Error('Task not found')
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body,{new: true,})

    res.status(200).json(updatedTask)
})

//@desc Delete tasks
//@route DELETE /api/tasks
const deleteTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)
    if(!task) {
        res.status(400)
        throw new Error('Task not found')
    }
    await task.remove()

    res.status(200).json({id:req.params.id})
})

module.exports = {  getTask, setTask, updateTask, deleteTask }