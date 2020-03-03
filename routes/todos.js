const router = require('express').Router()
const TodoController = require('../controllers/TodoController')
const { authentication, authorization } = require('../middlewares/auth')

router.use(authentication)

router.get('/', TodoController.findAll)

router.post('/create', TodoController.create)

router.get('/:id', TodoController.findByPk)

router.put('/:id/edit', authorization, TodoController.edit)

router.patch('/:id/status', authorization, TodoController.edit)

router.delete('/:id/delete', authorization, TodoController.delete)

module.exports = router