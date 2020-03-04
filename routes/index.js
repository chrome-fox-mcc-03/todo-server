const Controller = require('../controllers/controller.js')
const router = require('express').Router();
const UserRouter = require('./user.js')
const authentication = require('../middlewares/authentication.js')
const authorization = require('../middlewares/authorization.js')


router.use('/todos', authentication)
router.post('/todos', Controller.create)
// router.use('/todos', authorization)
router.get('/todos', Controller.read)
router.get('/todos/:id', authorization, Controller.readId)
router.put('/todos/:id', authorization, Controller.update)
router.delete('/todos/:id', authorization, Controller.delete)

router.use('/users', UserRouter)

module.exports = router;