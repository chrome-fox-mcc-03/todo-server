const jwt = require('jsonwebtoken')
const privateKey = process.env.PRIVATE_KEY

module.exports = class JWT {
  static sign(payload) {
    const token = jwt.sign(payload, privateKey)
    return token
  }

  static verify(token) {
    const decoded = jwt.verify(token, privateKey)
    return decoded
  }
}