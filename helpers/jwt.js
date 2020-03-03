const jwt = require('jsonwebtoken')

function getToken(payload) {
    return jwt.sign(payload, 'SECRET')
}

function verifyToken(token) {
    return jwt.verify(token, 'SECRET')
}

module.exports = {
    getToken,
    verifyToken
}