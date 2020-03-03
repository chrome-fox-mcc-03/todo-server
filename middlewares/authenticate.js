const { verifyToken } = require("../helpers/jwt.js")

function authenticate(req, res, next) {
    try {
        const token = req.headers.token
        req.decoded = verifyToken(token)
        console.log(`the decoded token is`);
        console.log(req.decoded);
        next()
    }
    catch(err) {
        next(err)
    }
}

module.exports = authenticate