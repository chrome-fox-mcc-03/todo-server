const jwt = require('jsonwebtoken');

function generateToken(thing, secret) {
    return jwt.sign(thing, secret)
}

function verifyToken(token) {
    return jwt.verify(token, process.env.SECRET)
}

module.exports = {
    generateToken,
    verifyToken
}
