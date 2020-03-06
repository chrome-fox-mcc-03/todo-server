const jwt = require('jsonwebtoken');

function generateToken(thing) {
    return jwt.sign(thing, process.env.SECRET)
}

function verifyToken(token) {
    return jwt.verify(token, process.env.SECRET)
}

module.exports = {
    generateToken,
    verifyToken
}
