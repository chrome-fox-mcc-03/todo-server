const { User, Todo } = require('../models')
const { checkPassword, signToken } = require('../helpers/bcrypt')
const { OAuth2Client } = require('google-auth-library')
const client_id = process.env.G_CLIENT_ID
const client = new OAuth2Client(client_id)

// console.log(process.env);


class UserController {
    static register(req, res, next){
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
            // res.status(500).json(err)
            next(err)
        })
    }

    static login(req, res, next){
        const {email} = req.body
        
        User.findOne({
            where: {
                email
            },
            include: [Todo]
        })
        .then(result => {

            if(result){
                
                const todoByThisPerson =  result.dataValues.Todos
                
                const pwd = req.body.password
                const {id, email, password} = result.dataValues
                const payload = {id, email}
                const verify = checkPassword(pwd, password)
                
                if(verify){
                    
                    const access_token = signToken(payload)
                    req.headers.token = access_token
                    
                    res.status(200).json({
                        'access_token' : access_token,
                        'todos' : todoByThisPerson
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
            // res.status(err.status).json({"Error message":err.msg})
            next(err)
        })
    }

    static loginGoogle(req, res, next){
        let data = ''
        // console.log(req.headers.token);
        
        client.verifyIdToken(
            {
                idToken: req.headers.token,
                audience: client_id
            }
        )
        .then(result => {
            data = result.payload
            // console.log(data);
            
            return User.findOne({
                where: {
                    email: data.email
                }
            })
        })
        .then( userFound => {
            // console.log(process.env.PASSWORD_GOOGLE);
            
            if(userFound){
                return userFound
            }else{
                return User.create({
                    email: data.email,
                    password: process.env.PASSWORD_GOOGLE
                })
            }
        })
        .then(userCreated => {
            // console.log(userCreated);
            let payload = {
                id: userCreated.id,
                email: userCreated.email
            }

            let access_token = signToken(payload)
            res.status(200).json(
                {
                    'access_token':access_token
                })
        })
        .catch(err => {
            // throw err
            next(err)
        })

    }


}


module.exports = UserController