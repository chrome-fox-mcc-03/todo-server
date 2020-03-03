const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(6)

function encrypt(value) {
    return bcrypt.hashSync(value, salt)
}

module.exports = encrypt