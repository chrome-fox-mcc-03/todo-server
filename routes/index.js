const Controller = require('../controllers/controller.js')
const router = require('express').Router();
const UserRouter = require('./user.js')
const authenticate = require('../middlewares/authentication.js')
const authorize = require('../middlewares/authorization.js')

router.use('/users', UserRouter)

router.use('/todos', authenticate)
router.post('/todos', Controller.create)
// router.use('/todos', authorization)
router.get('/todos', Controller.read)
router.get('/todos/:id', authorize, Controller.readId)
router.put('/todos/:id', authorize, Controller.update)
router.delete('/todos/:id', authorize, Controller.delete)


module.exports = router;