const { verifyToken } = require("../helpers/jwt.js")
const { CustomError } = require("../helpers/errorModel.js")
const { User } = require("../models")
function authenticate(req, res, next) {
    try {
        const token = req.headers.token
        let payload = verifyToken(token)
        req.decoded = payload
        console.log(`AUTHENTICATE: the decoded token is`);
        console.log(req.decoded);

        User.findByPk(payload.id)
            .then(response => {
                if(response.dataValues.id === payload.id) {
                    next()
                } else {
                    throw new CustomError(401, "Unauthorized Access!")
                }
            })
    }
     catch(err) {
         next(err)
     }
}

module.exports = authenticate