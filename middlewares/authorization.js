const {
    Todo
} = require('../models/index')

module.exports = function (req, res, next) {
    Todo.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            if (!result) {
                next({
                    status: 400,
                    msg: {
                        err: 'Todo Not Found'
                    }
                })
            } else {
                if (result.UserId === req.decoded.id) {
                    next()
                } else {
                    next({
                        status: 400,
                        msg: {
                            err: 'Access Denied'
                        }
                    })
                }
            }

        })
        .catch(err => {
            next(err)
        })
}