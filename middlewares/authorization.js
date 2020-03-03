const { Todo } = require('../models/index')

module.exports = function(req, res, next) {
    Todo.findOne( { 
        where: id = +req.params.id 
    })
        .then(response => {
            if(response) {
                if(response.UserId === req.decoded.id){
                    next()
                }
                else {
                    next({
                        status: 401,
                        message: "You're not authorize to do this!"
                    })
                }
            }
            else {
                next({
                    status: 404,
                    message: "Todo not found!"
                })
            }
        })
        .catch(err => {
            next(err)
        })
}