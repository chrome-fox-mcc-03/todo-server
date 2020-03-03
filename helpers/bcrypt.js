const bcrypt = require('bcryptjs')

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(5);

    return bcrypt.hashSync(password, salt)
    
}

function comparePassword(password, dbpassword) {

    return bcrypt.compareSync(password, dbpassword)

}

module.exports = {
    hashPassword,
    comparePassword
}