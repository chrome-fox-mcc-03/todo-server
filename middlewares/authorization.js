const { Todo } = require('../models')

module.exports = function (req, res, next) {
    Todo.findOne({
        where: {
            id: req.params.id
        }
    }).then(result => {
        if (result) {
            if (result.UserId == req.currentUserId) {
                next()
            } else {
                next({ name: 'Unauthorized' })
            }
        } else {
            next({ name: '404NotFound' })
        }
    }).catch(err => {
        next(err)
    })
}

