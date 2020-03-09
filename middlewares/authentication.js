const { verify } = require('../helpers/jwt')
const { User } = require('../models')

function authentication(req, res, next) {
    try {
        let decoded = verify(req.headers.token);
        User.findOne({ where: { id: decoded.id } })
            .then(result => {
                if (result) {
                    req.currentUserId = decoded.id
                    next()
                } else {
                    next({ name: 'Unauthorized' })
                }
            })
    } catch (err) {
        next({ name: 'Unauthorized' })
    }
}

module.exports = authentication