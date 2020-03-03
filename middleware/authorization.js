const { todo } = require('./../models')
function authorization(req,res,next) {
    let id = Number(req.params.id)
    console.log(req.decoded.id)
    console.log(id)
    todo.findByPk(id)
        .then(result => {
            console.log(result)
            if (!result) {
                throw ({name:"noIdFound" ,errors: [{message: "Id not found"}]})
            } else {
                if (result.dataValues.userId === req.decoded.id) {
                    next()
                } else {
                    throw({
                        name: "authorizationError",
                        errors: [{
                            message: "You are not authorized"
                        }]
                    })
                }
            }
        })
        .catch(err => {
            next(err)
        })
}

module.exports = authorization