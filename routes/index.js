const router = require('express').Router()
const controller = require('../controller/controller')
// const {authentication, authorization} = require('./middleware')

router.get('/s', function(req, res) {
    console.log("home")
})

router.post('/todos', function(req, res) {  
    controller.add(req, res)
})
// router.get('/todos', authentication, authorization, controller.findAll)
router.get('/todos', function(req ,res) {
    controller.findAll(req, res)
})


router.get('/todos/:id', function(req, res) {
    controller.findI(req, res)
})


router.put('/todos/:id', function(req, res, next) {
    controller.update(req, res)
})
router.delete('/todos/:id', function(req, res) {
    controller.delete(req, res)
})
module.exports = router