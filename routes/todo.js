const express= require('express').Router
const router = express()
const Controller = require('../controller/ControllerTodo')
const Authentication = require('../middleware/Authentication')

// router.use(Authentication)
router.get('/todo',Controller.findAll)
router.get('/todo/user/:id',Controller.findOneTodoUser)
router.post('/todo/user',Controller.addTodoUser)
router.post('/todo/team',Controller.addTodoTeam)
router.patch('/todo/user/:id',Controller.updateTodoUser)
router.patch('/todo/team/:id',Controller.updateTodoTeam)
router.delete('/todo/user/:id',Controller.deleteTodoUser)
router.delete('/todo/team/:id',Controller.deleteTodoTeam)

module.exports = router