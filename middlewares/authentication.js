const jwt = require('jsonwebtoken')
const {User} = require('../models')

module.exports = {
    authentication: function(req,res,next) {
        let {token} = req.headers
        let decoded = null

        try{
            decoded = jwt.verify(token,process.env.secretKey)
            User.findOne({
                where:{
                    id:decoded.id,
                    email:decoded.email
                }
            })
            .then((result) => {
                if(result) {
                    req.headers.UserId = decoded.id
                    next()
                }else{
                    const error = {
                        status: 401,
                        message:'Forbidden Access'
                    }
                    throw error
                }
            })
        }
        catch(err) {
            err = {
                status:401,
                message:'Forbidden Access'
            }
            res.status(401).json({err:err.message})
        }
    }
}