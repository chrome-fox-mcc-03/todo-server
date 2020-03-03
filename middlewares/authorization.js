const { Todo } = require('../models');
const CustomError = require('../helpers/error');

const authorization = (req, res, next) => {
    const userId = req.decoded.id;
    const todoId = req.params.id;
    Todo.findByPk(todoId)
        .then((result) => {
            if (result) {
                if (result.UserId == userId) {
                    next()
                }
                else {
                    throw new CustomError(401, "you're unauthorized");
                }
            } else {
                throw new CustomError(400, "todo not found!");
            }
        }).catch(next);
}

module.exports = authorization;
