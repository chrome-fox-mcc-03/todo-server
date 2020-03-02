const jwt = require('jsonwebtoken')
const { User } = require('../models')


module.exports = function(req, res, next) {
console.log(req.headers.access_token)
const access_token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEifQ.YbNGCuace9uun2pigikDHgWI-thJXZfvWg1A4d6Ttrw
const authenticated = jwt.verify(access_token, process.env.JWT_SECRET) //Token_JWT(JWT_SECRET) buat nya di web jwt.io(generate code)
User.findOne({
    id: authenticated
})
    .then(function(result) {
        if(result) {
            req.currentUserId = result.id
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
    
}