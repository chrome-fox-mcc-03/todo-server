const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

module.exports = {
  hashPassword(password) {
    const salt = bcrypt.genSaltSync(process.env.SALT)
    return bcrypt.hashSync(password, salt)
  },
  checkPassword(password, dbPassword) {
    return bcrypt.compareSync(password, dbPassword)
  },
  createToken(payload) {
    return jwt.sign(payload, SECRET)
  },
  verifyToken(token) {
    return jwt.verify(token, SECRET)
  }
}