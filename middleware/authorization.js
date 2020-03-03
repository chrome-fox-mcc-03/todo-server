const { Todo } = require('../models')


module.exports = function(req, res, next) {
    Todo.findByPk(req.params.id)
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