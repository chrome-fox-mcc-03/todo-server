const router = require('express').Router()
const TodoController = require('../controllers/todo')
const autentication = require('../middlewares/autentication')
const authorization = require('../middlewares/authorization')

router.use(autentication)

router.post('/', TodoController.create)
router.get('/', TodoController.findAll)
router.get('/:id', TodoController.findByPk)

router.put('/:id', authorization, TodoController.update)
router.delete('/:id', authorization, TodoController.delete)

module.exports = router