const jwt = require('jsonwebtoken')
const {Todo} = require('../models')

module.exports = {
    authorization: function(req,res,next){
    let {id} = req.params
    let {token} = req.headers
    let decoded = jwt.verify(token,process.env.secretKey)
        Todo.findOne({
            where:{
                id
            }
        })
        .then((result) => {
            if(result.dataValues.UserId == decoded.id) {
                next()
            }else{
                next({status:401,message:'Not Authorized'})
            }
        })
        .catch((err) => {
            next({status:401,message:'Not Authorized'})
        })
    }
}