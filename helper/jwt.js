const jwt = require('jsonwebtoken')

function tokenGenerate(payLoad) {
    return jwt.sign(payLoad, process.env.key_token)
}

function tokenVerify(token) {
    return jwt.verify(token, process.env.key_token)
}

module.exports = { tokenGenerate, tokenVerify }