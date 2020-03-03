const {Todo, User} = require('../models')
const encrypt = require('../helper/bcrypt')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
class UserController{

    static Register(req, res, next) {
        const { Email, Password } = req.body  
        console.log(req.body)  
        console.log(Email)
        console.log(Password)
        User.create({
            Email:Email,
            Password: encrypt(Password)
        })
            .then(function(response) {
                const payload = {
                    id: response.id,
                    Email: response.Email
                }
                res.status(200).json(payload)
            })
            .catch(function(err) {
                next(err)
            })

    }
    

    static Login(req, res, next) {
        User.findOne({
            where:{
                Email : req.body.Email
            }
        })
            .then(function(response) {
                if(response) {
                    if(bcryptjs.compareSync(req.body.Password, response.Password)) {
                        const accesstoken = jwt.sign({id:response.id}, process.env.JWT_SECRET)
                        // req.headers.accesstoken = accesstoken
                        res.status(200).json({response, accesstoken})
                    }
                    else{
                        res.send('errorrr')
                    }
                }
            })
            .catch(function(err) {
                console.log(err)
                next(err)
            })
    }

}

module.exports = UserController