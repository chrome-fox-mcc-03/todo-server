const jwt = require('jsonwebtoken')

function makeToken(payload) {
    return jwt.sign(payload, process.env.SECRET)
}

function checkAuthent(token) {
    // console.log(jwt.verify(token, process.env.SECRET))
    return jwt.verify(token, process.env.SECRET)
}

module.exports = {
    makeToken,
    checkAuthent
}