const { User } = require('../models')

module.exports = {
    register(req, res, next) {
        console.log(req.body, '<===3')
    },
    login(req, res, next) {

    }
}