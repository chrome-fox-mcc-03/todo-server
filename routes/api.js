const router = require('express').Router()
const { weatherApi } = require('../controllers/api')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/weather?', weatherApi)

module.exports = router