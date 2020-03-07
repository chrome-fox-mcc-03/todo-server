const express= require('express').Router
const router = express()
const Controller = require('../controller/ControllerTodo')
const Authentication = require('../middleware/Authentication')
const authorized = require('../middleware/Authorized')


router.use(Authentication)
router.get('/todo',Controller.findAll)
router.get('/todo/user/:id',Controller.findOneTodoUser)
router.post('/todo/user',Controller.addTodoUser)
router.post('/todo/team',Controller.addTodoTeam)
router.put('/todo/user1/:id',Controller.updateTodoUserAll)
router.patch('/todo/user/:id',authorized,Controller.updateTodoUser)
router.patch('/todo/team/:id',authorized,Controller.updateTodoTeam)
router.delete('/todo/user/:id',authorized,Controller.deleteTodoUser)
router.delete('/todo/team/:id',Controller.deleteTodoTeam)

module.exports = router