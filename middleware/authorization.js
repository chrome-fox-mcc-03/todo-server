const {Todo} = require('../models')

function authorize(req, res, next){
    Todo.findOne({where: {id : req.params.Id}})
        .then(data=> {
            if(data.length > 0){
                next()
            } else {
                res.status(401).json('Not Authorized')
            }
        })
}

module.exports = authorize