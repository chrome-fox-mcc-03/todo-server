const { User } = require('../models/index.js')
const { verifyToken } = require('../helpers/jwt.js')

function authentication(req, res, next) {
    // res.status(200).json('Masuk')
    const token = req.headers.token
    try {
        req.decoded = verifyToken(token);
        console.log(req.decoded)
        User.findOne({where: {id: req.decoded.id}})
            .then(exists => {
                if(exists) {
                    return next()
                }
                else {
                    throw {status: 404, customName: 'Token hacker lol'}
                }
            })
            .catch(err => next(err))
    } catch(err) {
        // err
        res.status(500).json(err)
    }
}

module.exports = authentication