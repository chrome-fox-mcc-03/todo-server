const { Todo } = require('../models/index')

module.exports = (req, res, next) => {
    let id = req.params.id
    Todo.findOne({
        where: {
            id
        }
    })
        .then(todo => {
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
        })
        .catch(err => next(err))
}