const { verifyToken } = require('../helpers/jwt')

function auth(req, res, next) {
    try {
        const token = req.headers.token
        req.decoded = verifyToken(token)
        next()
    } catch(err) {
        next({
            status: 401,
            message: {
                error: 'Please login first'
            }
        })
    }      
}

module.exports = auth