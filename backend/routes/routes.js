const express = require('express')
const path = require('path')
const pathdir = path.dirname(path.parse(__filename).dir)
const todoController = require(path.join(pathdir, '/controllers/todo-controller.js'))

const router = express.Router()

router.get('/getAllTodo', todoController.getAllTodo)
router.get('/getTodoByID', todoController.getTodoById)
router.put('/addTodo', todoController.addTodo)
router.delete('/deleteTodoById', todoController.deleteTodoById)

module.exports = router