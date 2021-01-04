"use strict"
const jwt = require('jsonwebtoken')
const { Todo } = require('../models/index')

function authoFindAll(req, res, next){
    Todo.findAll({
        where: {
            user_id: req.decoded.id
        }
    })
    .then(result => {
        if(result[0]){
            next()
        }
        else{
            throw new Error('Not found')
        }
    })
    .catch(next)
}

function checkOwnerId(req, res, next){
    const authError = {
        name: 'Unauthorized',
        message: 'You are not authorized!'
    }
    Todo.findAll({
        where:{
            id: req.params.id,
            user_id: req.decoded.id
        }
    })
    .then(result => {
        if(result[0]){
            next()
        }
        else{
            throw authError
        }
    })
    .catch(next)
}

module.exports = { authoFindAll, checkOwnerId }