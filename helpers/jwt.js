const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

module.exports = {
  createToken(id) {
    return jwt.sign({ id }, SECRET)
  },

  verify(token) {
    try {
      return jwt.verify(token, SECRET)
    }
    catch (err) {
      throw err
    }
  }
}