const { Todo } = require("../models")

function authorize(req, res, next) {
    let todoId = +req.params.id
    let userId = +req.payload.id

    Todo.findByPk(todoId)
        .then(result => {
            // console.log(result);
            if(result.dataValue.UserId === userId) {
                next()
            } else {
                next({
                    status: 401,
                    message: "User not authorized"
                })
            }
            
        })
        .catch({
            status: 404,
            message: "Entry not found"
        })

}

module.exports = authorize