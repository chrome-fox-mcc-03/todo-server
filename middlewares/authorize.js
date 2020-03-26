const { Todo } = require('../models/index');
const AppError = require('../helper/myCustomError');

function authorize (req, res, next) {
    let id = Number(req.params.id);
    Todo.findByPk(id)
    .then(result => {
        if (result) {
            if (result.UserId === req.thisUser.id) {
                next()
            } else {
                throw AppError(401, "Item owned by other user")
            }
        } else {
            throw AppError(404, "Item doesn't exist")
        }
    })
    .catch(next);
}

module.exports = authorize;