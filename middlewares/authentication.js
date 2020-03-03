const { checkToken } = require('../helpers/jwt')
const { User } = require('../models')
module.exports = (req, res, next) => {
    try {
        const decoded = checkToken(req.headers.access_token)
        User
            .findOne({
                where: {
                    email: decoded.email
                }
            })
            .then(user => {
                req.currentUserId = decoded.id
                next()
            })
            .catch(next)
    } catch {
        next(err)
    }
}