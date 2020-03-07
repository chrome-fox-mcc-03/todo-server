const bcrypt = require('bcrypt')
const salt = +process.env.SALT

class Helperbcrypt {
    static hashpw (pw) {
        const generate = bcrypt.hashSync(pw,salt)
        return generate
    }
    static comparepw (pw,hashpw) {
        const generate = bcrypt.compareSync(pw,hashpw)
        return generate
    }
}

module.exports = Helperbcrypt