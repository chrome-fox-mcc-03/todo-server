const { Todo } = require("../models")
const { CustomError } = require("../helpers/errorModel.js")

function authorizer(req, res, next) {
    let todoId = +req.params.id
    let userId = req.decoded.id

    console.log(`hello, req params`);
    console.log(req.params);

    console.log(`before anything, this is the paylod`);
    console.log(req.decoded);

    console.log(`the id of decoded payload of interest is ${req.decoded.id}`);

    Todo.findByPk(todoId)
        .then(result => {
            console.log(result);
            if(result.UserId === userId) {
                next()
            } else {
                throw new CustomError(404, "Query not found")
            }
            
        })
        .catch(next)

}

module.exports = authorizer