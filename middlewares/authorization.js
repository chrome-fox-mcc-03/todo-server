const { Todo } = require('../models/index')

module.exports = function(req, res, next) {
    Todo.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(todo => {
            if (todo) {
                if (todo.UserId == req.decoded.id) {
                    next()
                } else {
                    next({
                        status: 400,
                        message: { error: 'Authorization failed' }
                    })
                }
            } else {
                next({
                    status: 404,
                    message: { error: 'Todo not found' }
                })
            }
        })
        .catch(err => {
            next(err)
        })
}