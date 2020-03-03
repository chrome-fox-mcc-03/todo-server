const bcrypt = require('bcryptjs');

function hashPass (password) {
    const salt = bcrypt.genSaltSync(9);
    return bcrypt.hashSync(password, salt);
}

function checkPass (password, hashed) {
    return bcrypt.compareSync(password, hashed)
}

module.exports = {
    hashPass, 
    checkPass
};