const bcrypt = require('bcryptjs')

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(+process.env.SALT)
  return bcrypt.hashSync(password, salt)
}

const comparePassword = (password, dbpassword) => {return bcrypt.compareSync(password, dbpassword)}

module.exports = { hashPassword, comparePassword }
