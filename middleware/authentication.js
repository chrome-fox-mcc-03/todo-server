'use strict'

const jwt  = require('jsonwebtoken');
const { User } = require('../models')

module.exports = function(req, res, next){
    
    try {
        const access_token = req.headers.access_token
        const decoded_token = jwt.verify(access_token, process.env.SECRET);
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
                return result
            }else{
                const error = {
                    status : 401,
                    message : 'Forbidden access!'
                }
                throw error
            }
        }).catch((err) => {
            res.status(err.status).json({"Error message":err.message})
        });

    } catch (error) {
        const err = {
            status : 401,
            message : 'Forbidden access!'
        }
        res.status(err.status).json({"Error message":err.message})
    }
    
    
}