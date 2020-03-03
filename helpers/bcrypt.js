"use strict"
const bcrypt = require('bcryptjs')

function hashPass(user){
    const salt = bcrypt.genSalt(10)
    user.password = bcrypt.hashSync(user.password, salt)
}

module.exports = { hashPass }