const { User } = require('../models')
const { checkPassword, signToken } = require('../helpers/bcrypt')

class UserController {
    static register(req, res){
        const {email, password} = req.body
        User.create({
            email: email,
            password: password
        })
        .then (results => {
            const {id, email} = results.dataValues
            res.status(201).json({user_id : id, user_email : email})
        })
        .catch (err => {
            res.status(500).json(err)
        })
    }

    static login(req, res){
        const {email} = req.body
        
        User.findOne({
            where: {
                email
            }
        })
        .then(result => {

            if(result){
                const pwd = req.body.password
                const {id, email, password} = result.dataValues
                const payload = {id, email}
                const verify = checkPassword(pwd, password)
                
                if(verify){
                    
                    const access_token = signToken(payload)
                    req.headers.token = access_token
                    
                    res.status(200).json({
                        'access_token' : access_token
                    })

                }else{
                    const error = {
                        status: 400,
                        msg: 'wrong email / password'
                    }
                    throw error
                }
            }else{
                const error = {
                    status: 400,
                    msg: 'wrong email / password'
                }
                throw error
            }
            
        })
        .catch(err => {
            res.status(err.status).json({"Error message":err.msg})
        })
    }


}


module.exports = UserController