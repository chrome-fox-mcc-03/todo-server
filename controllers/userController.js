const {Todo,User} = require('../models')
const {signToken,checkPassword} = require('../helpers/index')
const {OAuth2Client} = require('google-auth-library');
const axios = require('axios')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class UserController {
    static register(req,res,next) {
        let {email,password} = req.body
        User.create({
            email,
            password
        })
        .then((result) => {
            let {id,email} = result.dataValues
            let token = signToken(id,email)
            req.headers.token = token

            const restdb = axios.create({
                baseURL: 'https://fancytodo-b07d.restdb.io',
                headers: {
                    'Host': 'fancytodo-b07d.restdb.io',
                    'Content-Type': ' application/json',
                    'x-apikey': '6196aff4d2e6266f23619c13aee6b087ad1a2',
                    'Cache-Control': 'no-cache'
                }
            })
            restdb({
                method:'POST',
                url:'/mail',
                data : {
                    to: email,
                    subject: 'Welcome to Fancy Todo',
                    html: 'WELCOME To Fancy Todo',
                    company: 'FANCY TODO INC',
                    sendername: 'Fancy Todo'
                }
            })

            res.status(201).json({id,email,token})
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
                    res.status(200).json({token,id})
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

    static loginGoogle(req,res,next) {
        let {password,id_token} = req.body
        let email = null
        
        async function verify() {
            const ticket = await client.verifyIdToken({
                idToken: id_token,
                audience: process.env.GOOGLE_CLIENT_ID
            });
            const payload = ticket.getPayload();
            const userid = payload['sub'];
            email = payload.email
            
            User.findOne({
                where:{
                    email
                }
            })
            .then((result) => {
                if(result) {
                    let {id,email} = result.dataValues
                    let newResult = {id,email}
                    let token = signToken(newResult)
                    req.headers.token = token
                    res.status(200).json({token,id})
                }else{
                    return User.create({
                        email,
                        password
                    })
                }
            })
            .then((result) => {
                if(result){
                    let {id,email} = result.dataValues
                    let newResult = {id,email}
                    let token = signToken(newResult)
                    req.headers.token = token

                    const restdb = axios.create({
                        baseURL: 'https://fancytodo-b07d.restdb.io',
                        headers: {
                            'Host': 'fancytodo-b07d.restdb.io',
                            'Content-Type': ' application/json',
                            'x-apikey': '6196aff4d2e6266f23619c13aee6b087ad1a2',
                            'Cache-Control': 'no-cache'
                        }
                    })
                    restdb({
                        method:'POST',
                        url:'/mail',
                        data : {
                            to: email,
                            subject: 'Welcome to Fancy Todo',
                            html: 'WELCOME To Fancy Todo',
                            company: 'FANCY TODO INC',
                            sendername: 'Fancy Todo'
                        }
                    })

                    res.status(200).json({token,id})
                }
            })
            .catch((err) => {
                next(err)
            });
        }
        verify().catch(console.error);
    }
}

module.exports = UserController