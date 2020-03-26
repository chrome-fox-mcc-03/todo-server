const router = require('express').Router()
// const Controller = require('./../controllers/controller')
const UsersRoute = require('./users')
const TodosRoute = require('./todos')
const authenticate = require('./../middleware/authentication')

router.use(UsersRoute)
router.use(authenticate)
router.use(TodosRoute)

module.exports = router