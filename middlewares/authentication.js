"use strict"
const jwt = require('jsonwebtoken')
const { User } = require('../models/index')

module.exports = function authentication(req, res, next){
    const authenError = {
        name: 'Unauthorized',
        message: 'You are not authorized.'
    }
    try {
        const decodedData = jwt.verify(req.headers.user_token, process.env.SECRET_KEY)
        User.findAll({
            where: {
                username: decodedData.username
            }
        })
        .then(result => {            
            if(result[0]){
                req.decoded = {
                   username: decodedData.username,
                   id: decodedData.id
                } 
                next()
            }
            else{
                throw (authenError)
            }
        })
    }
    catch(err){
        throw (authenError)
    }
}