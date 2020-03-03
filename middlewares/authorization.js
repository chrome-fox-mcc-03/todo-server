const jwt = require('jsonwebtoken')
const {Todo} = require('../models')

module.exports = {
    authorization: function(req,res,next){
        let {id} = req.params
        let {token} = req.headers
        let decoded = null
        
        try{
            decoded = jwt.verify(token,process.env.secretKey)
            Todo.findOne({
                where:{
                    id
                }
            })
            .then((result) => {
                if(result.dataValues.UserId == decoded.id) {
                    next()
                }else{
                    throw new Error
                }
            })
            .catch((err) => {
                err = {
                    status:403,
                    message:"Forbidden Can't Access"
                }
                res.status(err.status).json({err:err.message})
            })
        }
        catch(err){
            err = {
                status:401,
                message:"Forbidden Access"
            }
            res.status(err.status).json({err:err.message})
        }
    }
}