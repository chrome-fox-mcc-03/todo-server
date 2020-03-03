const jwt = require('jsonwebtoken');

function generateToken(payload) {
    return jwt.sign(payload, "todofancy")
}

function verifyToken(token) {
    return jwt.verify(token, "todofancy")
}

module.exports = {
    generateToken,
    verifyToken
}