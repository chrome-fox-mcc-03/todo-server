const jwt = require('jsonwebtoken')
const { User } = require('../models')


module.exports = function(req, res, next) {
    const access_token = req.headers.access_token
    const authenticated = jwt.verify(access_token, process.env.JWT_SECRET) //Token_JWT(JWT_SECRET) buat nya di web jwt.io(generate code)
    req.id = authenticated.id
    User.findOne({
        where:{
            id: authenticated.id
        }
    })
        .then(function(result) {
            if(result) {
                next()
            }
            else{
                res.status(403).json({
                    error: "Not Authenticated"
                })
            }
            
        })
        .catch(function(err) {
            res.status(500).json({
                error: "Internal Server Error"
            })
        })

        // localStorage.getItem('access_token')
    
}


