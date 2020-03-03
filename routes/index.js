const Controller = require('../controllers/controller.js')
const router = require('express').Router();
const UserRouter = require('./user.js')
const authentication = require('../middlewares/authentication.js')

router.use('/todos', authentication)
router.post('/todos', Controller.create)
// router.use('/todos', authorization)
router.get('/todos', Controller.read)
router.get('/todos/:id', Controller.readId)
router.put('/todos/:id', Controller.update)
router.delete('/todos/:id', Controller.delete)

router.use('/users', UserRouter)

module.exports = router;