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
                    res.status(400).json('Authorization failed')
                }
            } else {
                res.status(404).json('Todo not found')
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
}