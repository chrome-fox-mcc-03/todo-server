const router = require('express').Router()
const todoRoutes = require('../routes/todoRoutes')

router.get('/', (req, res) => {
    let welcome = `Welcome to Todo App
        Please proceed to the Documentation to get started
        Docs : https://bhaktitodoapps.docs.apiary.io/#`

    res.status(200).send(welcome)
})

router.use('/todos', todoRoutes)

module.exports = router