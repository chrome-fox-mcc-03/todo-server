const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(+process.env.SALT)

module.exports = {
  hash (password) {
    return bcrypt.hashSync(password, salt)
  },

  compare (input, password) {
    return bcrypt.compareSync(input, password)
  }
}