const jwt = require('jsonwebtoken')
const PRIVATKEY = process.env.PRIVATKEY

module.exports = {
    generateToken : (payload) => {
        return jwt.sign(payload, PRIVATKEY)
    },
    checkToken : (token) => {
        return jwt.verify(token, PRIVATKEY)
    }
}