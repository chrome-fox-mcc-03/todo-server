const Helper = require('../helper/helper')
const {User} = require('../models')

function Auth (req, res, next) {
    if (req.headers.token) {
        try {
            var decoded = Helper.verify(req.headers.token, 'wrong-secret');
            User.findOne({
                where: {id:decoded.id, email: decoded.email}
            })
                .then(data=> {
                    if(data) {
                        req.UserId = decoded.id
                        next()
                    } else {
                        res.status(401).json({message : "Please Login First"})
                    }
                })
          } catch(err) {
            res.status(401).json({message : "Please Login First"})
          }
    } else {
        res.status(401).json({message : "Please Login First"})
    }
}

module.exports = Auth