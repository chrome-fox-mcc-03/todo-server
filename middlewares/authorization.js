const { Todo } = require('../models')
const { verifyToken } = require('../helpers/jwt.js')
module.exports = function(req, res, next) {
    Todo.findOne({
        where: { id: +req.params.id },
    })
        .then(response => {
            if(response) {
                if(response.UserId === req.decoded.id) {
                    next();
                } else {
                    next({
                        status: 401,
                        message: 'You dont have permission to access this'
                    })
                }
            }
            else {
                next({
                    status: 404,
                    message: 'TODO not found'
                })
            }
        })
        .catch(next)
}