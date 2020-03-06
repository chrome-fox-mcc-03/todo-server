const router = require('express').Router()
const controller = require('../controllers/todoController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')



router.use(authentication)

router.get('/', controller.get)


router.post('/', controller.add)

router.get('/:id', authorization, controller.getId)

router.put('/:id', authorization, controller.put)

router.delete('/:id', authorization, controller.delete)

module.exports = router