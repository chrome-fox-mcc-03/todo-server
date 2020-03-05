const router = require('express').Router();
const Controller = require('../controller/todos')
const authentication = require('../middleware/auth')
const authorization = require('../middleware/authorization')

router.use(authentication)
router.post('/', Controller.create)
router.get('/', Controller.findAll)
router.get('/:id', authorization, Controller.findOne)
router.put('/:id', authorization, Controller.update)
router.delete('/:id', authorization, Controller.destroy)

module.exports = router