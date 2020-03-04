const checkAuthent = require('./../helper/jwt').checkAuthent
function authenticate(req,res,next){
    try {
        const decoded = checkAuthent(req.headers.token)
        console.log(decoded)
        req.decoded = decoded
        console.log(req.decoded)
        next()
    } catch(err) {
        next(err)
    }
}

module.exports = authenticate