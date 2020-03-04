const jwt = require('jsonwebtoken')
const secret = process.env.SECRET
class HelperJwt {
    static signToken (token) {
        const generate = jwt.sign(token,secret)
        return generate
    } 
    static vertify (payload){
        const vertify = jwt.verify(payload,secret)
        return vertify
    }
}

module.exports = HelperJwt