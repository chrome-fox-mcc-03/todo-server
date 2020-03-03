const { User } = require('../models/index.js')
const { verifyToken } = require('../helpers/jwt.js')

function authorization(req, res, next) {
    const token = req.headers.token
}

module.exports = authorization;