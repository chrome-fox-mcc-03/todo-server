const bcrypt = require('bcryptjs')

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(6)
    return bcrypt.hashSync(password, salt)
}

function comparePassword(password1, password2) {
    return bcrypt.compare(password1, password2)
}
module.exports = {
    hashPassword,
    comparePassword
}