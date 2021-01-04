"use strict"
const bcrypt = require('bcryptjs')

function hashPass(user){
    const salt = bcrypt.genSaltSync(10)
    user.password = bcrypt.hashSync(user.password, salt)
}

//remember this returns a promise
function comparePassword(passwordInput, userData){
    return bcrypt.compare(passwordInput, userData.password)
    .then(compareResult => {
        return {compareResult, userData}
    })
}

module.exports = { hashPass, comparePassword }