'use strict'

const jwt  = require('jsonwebtoken');
const { User } = require('../models')

module.exports = function(req, res, next){
    const access_token = req.headers.access_token
    // const decoded = jwt.verify(access_token, process.env.SECRET,);
    const decoded_token = jwt.verify(access_token, process.env.SECRET, (err, decoded) => {
        if(err){
            throw err
        }else{
            return decoded
        }
    });
    
    const {id, email} = decoded_token.id
    
    
    User.findOne({
        where: {
            id,
            email
        }
    })
    .then((result) => {
        
        if(result){
            req.headers.userId = id
            next()
        }else{
            const error = {
                status : 401,
                msg : 'Forbidden access!'
            }
            throw error
        }
    }).catch((err) => {
        res.status(err.status).json({"Error message":err.msg})
    });
    
}