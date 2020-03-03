const {tokenVerify} = require('../helper/jwt')

module.exports = function (req, res, next){
    try{
        req.decoded = tokenVerify(req.headers.token)
        next()
    }catch(err){
        next({
            status: 400,
            msg:{
                err:'Access Denied'
            }
        })
    }
}