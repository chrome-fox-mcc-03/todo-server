const {Todo,User} = require('../models')
const {signToken,checkPassword} = require('../helpers/index')

class UserController {
    static register(req,res,next) {
        let {email,password} = req.body
        User.create({
            email,
            password
        })
        .then((result) => {
            let {id,email} = result.dataValues
            let newResult = {id,email}
            let token = signToken(newResult)
            req.headers.token = token
            res.status(201).json({newResult,token})
        })
        .catch((err) => {
            next(err)
        });
    }

    static login(req,res,next) {
        let {email,password} = req.body
        User.findOne({
            where:{
                email
            }
        })
        .then((result) => {
            if(result){
                let check = checkPassword(password,result.dataValues.password)
                if(check){
                    let {id,email} = result.dataValues
                    let newResult = {id,email}
                    let token = signToken(newResult)
                    req.headers.token = token
                    res.status(200).json({token})
                }else{
                    next({
                        status:400,
                        message:'Email / Password Wrong'
                    })
                }
            }else{
                next({
                    status:400,
                    message:'Email / Password Wrong'
                })
            }
        })
        .catch((err) => {
            next(err)
        });
    }
}

module.exports = UserController