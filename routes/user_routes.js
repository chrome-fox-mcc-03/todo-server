const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.post('/register',UserController.register)
router.post('/login', UserController.login)
// router.get('/',TodoController.findAll)
// router.get('/:id',TodoController.findOne)
// router.put('/:id',TodoController.update)
// router.delete('/:id',TodoController.delete)

module.exports = router