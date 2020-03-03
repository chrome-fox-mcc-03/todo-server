const { Todo } = require('../models/index');


module.exports = (req, res, next) => {
    Todo.findOne({
        where: {
            id : req.params.id
        }
    })
    .then(result => {        
        console.log(req.decoded.id);
        console.log(result.UserId);
        
        
        if(result.UserId == req.decoded.id) {
            console.log(`masuok`);
            
            next();
        } else {
            res.status(401).json(`unauthorized account to do this`)
        }
    })
    .catch(error => {
        res.status(400).json(error);
    })
}