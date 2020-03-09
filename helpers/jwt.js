const jwt = require('jsonwebtoken');

function generateToken(thing) {
    return jwt.sign(thing, process.env.SECRET, {
        expiresIn: '1h'
    })
}

function verifyToken(token) {
    return jwt.verify(token, process.env.SECRET, {
        maxAge: "1h"
    })
}

module.exports = {
    generateToken,
    verifyToken
}
