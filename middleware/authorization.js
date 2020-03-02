const jwt = require('jsonwebtoken')
const { UserTodo } = require('../models')


module.exports = function(req, res, next) {
    UserTodo.findByPk(req.params.id)
        .then(function(result) {
            if(req.currentUserId == result.UserId) {
                next()
            }
            else{
                res.status(500).json({
                    error: "Unauthorized"
                })
            }
            
        })
        .catch(function(err) {
            res.status(500).json(err)
        })
    }