const bcrypt = require('bcryptjs')
const jwt  = require('jsonwebtoken');

function hashPassword(pwd){
    const salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(pwd, salt);
    return hash
}

function checkPassword(password, hashedPassword){
    return bcrypt.compareSync(password, hashedPassword); // true/false
}

function signToken(payload){
    const token = jwt.sign({ id: payload }, process.env.SECRET);
    return token
}


module.exports = {
    hashPassword,
    signToken,
    checkPassword
}

