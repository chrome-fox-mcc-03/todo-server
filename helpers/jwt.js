const jwt = require('jsonwebtoken');

function generateToken(payload) {
    return jwt.sign(payload, 'SECRET')
}

module.exports = generateToken;