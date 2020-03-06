const { Todo } = require("../models")
const  CustomError  = require("../helpers/errorModel.js")

function authorizer(req, res, next) {
    console.log(">>> AUTHORIZATION <<<");
    let todoId = +req.params.id
    let userId = req.decoded.id

    console.log(`hello, req params`);
    console.log(req.params);

    console.log(`before anything, this is the paylod`);
    console.log(req.decoded);

    console.log(`the id of decoded payload of interest is ${req.decoded.id}`);

    Todo.findByPk(todoId)
        .then(result => {
            console.log(`UPON SEARCHING`);
            console.log(result);
            if(result) {
                if(result.UserId === userId) {
                    console.log("AUTHORIZATION PASSED!");
                    next()
                } else {
                    console.log("AUTHORIZATION FAILED!");
                    throw new CustomError(400, "UNAUTHORIZED ACCESS")
                }
            } else {
                throw new CustomError(404, "ENTRY NOT FOUND")
            }
            
            
        })
        .catch(next)

}

module.exports = authorizer