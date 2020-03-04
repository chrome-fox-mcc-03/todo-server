const { verifyToken } = require('../helpers/jwt.js')
const { User } = require('../models')

module.exports = function(req, res, next) {
    try {
        token = req.headers.token
        req.decode = verifyToken(token)
        
        User.findOne({
            where: {
                email: req.decode.email
            }
        })
            .then(result => {
                next()
            })
            .catch(err => {
                next(err)
            })
    } catch (err) {
        next(err)
    }
}