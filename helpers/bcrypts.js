const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10)

function hashPassword(ori) {
    // console.log(`original password`);
    // console.log(ori);
    // console.log(`hashed password, ${bcrypt.hash(ori, salt)
    // }`);
    return bcrypt.hashSync(ori, salt)
}

function comparePassword(logged, stored) {
    return bcrypt.compareSync(logged, stored)
}

module.exports = {
    hashPassword,
    comparePassword
}