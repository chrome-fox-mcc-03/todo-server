const { verifyToken } = require("../helpers/jwt.js")
const { CustomError } = require("../helpers/errorModel.js")
const { User } = require("../models")
let token
let payload
function authenticate(req, res, next) {
    try {
        token = req.headers.token
        payload = verifyToken(token)
        console.log(`the decrypted payload is`);
        console.log(payload);
        req.decoded = payload
        // next()

        User.findAll({
            where: {
                id: payload.id
            }
        })
            .then(response => {
                console.log(`user found`);
                console.log(response);
                console.log(`the response's id is`);
                console.log(response[0].id);
                if(response[0].id === payload.id) {
                    console.log(`user authentication match!`)
                    req.decoded = payload
                    next()
                } else {
                    throw new CustomError(400, "Unauthorized Access!")
                }
            })
    }
     catch(err) {
         next(err)
     }
}

module.exports = authenticate