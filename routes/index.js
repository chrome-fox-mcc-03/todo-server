const router = require('express').Router()
const todoRoutes = require('../routes/todoRoutes')
const userRoutes = require('../routes/userRoutes')


router.get('/', (req, res) => {
    let welcome = `Welcome to Todo App
        Please proceed to the Documentation to get started
        Docs : https://bhaktitodoapps.docs.apiary.io/#`

    res.status(200).send(welcome)
})

router.use('/todos', todoRoutes)
router.use('/user', userRoutes)

module.exports = router