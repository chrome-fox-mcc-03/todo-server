const { Todo } = require('../models/index')

module.exports = (req, res, next) => {
    let id = req.params.id
    Todo.findOne({
        where: {
            id
        }
    })
        .then(todo => {
            if (todo) {
                if (todo.UserId == req.decoded.id) {
                    next()
                } else {
                    next({
                        status: 401,
                        message: {
                            error: 'You do not have authorize to do this'
                        }
                    })
                }
            } else {
                next({
                    status: 404,
                    message: {
                        error: 'Todo not found'
                    }
                })
            }
        })
        .catch(err => next(err))
}