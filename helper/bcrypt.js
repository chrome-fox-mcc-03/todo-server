const bcrypt = require('bcryptjs')

function hashPass(pass){
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(pass, salt)
}

function comparePass(passInput, passHash){
    return bcrypt.compareSync(passInput, passHash)
}

module.exports = {
    hashPass,
    comparePass
}