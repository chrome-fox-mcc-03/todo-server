const jwt = require('jsonwebtoken')

function makeToken(payload) {
    return jwt.sign(payload, 'SECRET')
}

function checkAuthent(token) {
    return jwt.verify(token, 'SECRET')
}

module.exports = {
    makeToken,
    checkAuthent
}