const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
function encrypt(password) {
    let salt = bcrypt.genSaltSync(2)
    let hash = bcrypt.hashSync(password,salt)
    return hash
}

function signToken(payload){
    let token = jwt.sign(payload,process.env.secretKey)
    return token
}

function checkPassword(password,passwordDb){
    return bcrypt.compareSync(password, passwordDb);
}

module.exports = {
    encrypt,
    signToken,
    checkPassword
}