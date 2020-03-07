const { Todo } = require('../models/index');

module.exports = (req, res, next) => {
    Todo.findOne({
        where: {
            id : req.params.id
        }
    })
    .then(result => {                
        if(result.UserId == req.decoded.id) {
            // console.log(`masuok`);
            next();
        } else {
            next({
                status: 400,
                message: `you aren't authorized to do this`
            })
        }
    })
    .catch(error => {
        next(error);
    })
}