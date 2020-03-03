const { verifyToken } = require("../helpers/jwt.js")
const { CustomError } = require("../helpers/errorModel.js")

function authenticate(req, res, next) {
    try {
        const token = req.headers.token
        req.decoded = verifyToken(token)
        console.log(`AUTHENTICATE: the decoded token is`);
        console.log(req.decoded);
        next()
    }
     catch(err) {
         next(err)
     }
}

module.exports = authenticate