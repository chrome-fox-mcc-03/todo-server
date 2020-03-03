const bcrypt = require('bcrypt');

function generatePassword(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

module.exports = { generatePassword }; 