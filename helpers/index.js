const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
function encrypt(password) {
    let salt = bcrypt.genSaltSync(2)
    let hash = bcrypt.hashSync(password,salt)
    return hash
}

function signToken(payload){
    let token = jwt.sign(payload,process.env.secretKey,{
        expiresIn:'300000' // 5mnt
    })
    return token
}

function checkPassword(password,passwordDb){
    return bcrypt.compareSync(password, passwordDb);
}

function decodeToken(token) {  
    return jwt.verify(token,process.env.secretKey)
}

module.exports = {
    encrypt,
    signToken,
    checkPassword,
    decodeToken
}