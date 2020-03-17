const jwt = require('jsonwebtoken')
const {User} = require('../models')

module.exports = {
    authentication: function(req,res,next) {
        let {token} = req.headers
        let decoded = jwt.verify(token,process.env.secretKey)
        User.findOne({
            where:{
                id:decoded.id,
                email:decoded.email
            }
        })
        .then((result) => {
            req.UserId = decoded.id
            next()
        }).catch((err) => {
            next({status: 401,message:'Forbidden Access'})
        });
    }
}