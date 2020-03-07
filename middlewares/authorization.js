const jwt = require('jsonwebtoken')
const {Todo} = require('../models')

module.exports = {
    authorization: function(req,res,next){
        console.log(process.env.secretKey)
        let {id} = req.params
        console.log(id)
        let {token} = req.headers
        console.log(token)
        let decoded = jwt.verify(token,process.env.secretKey)
        // console.log(decoded)
        try{
            Todo.findOne({
                where:{
                    id
                }
            })
            .then((result) => {
                console.log(result)
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