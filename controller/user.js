const {User} = require('../models')
const Helper = require('../helper/helper')
const {OAuth2Client} = require('google-auth-library')

class Controller {
    static register(req, res, next) {
        User.create({
            email : req.body.email,
            password : req.body.password
        })
            .then(data=> {
                const token = Helper.generateToken({id:data.id,email:data.email})
                res.status(201).json({token})
            })
            .catch(err=> next(err))
    }
    static login(req, res, next){
        User.findOne({
            where:{email : req.body.email}
        })
            .then(data => {
                if (Helper.comparePassword(req.body.password, data.password)){
                    const token = Helper.generateToken({id:data.id,email:data.email})
                    res.status(200).json({token})
                } else {
                    throw ({message : 'Email / Password are Wrong'})
                }
            })
            .catch(err=> next(err))
    }
    static googleSignIn(req, res, next){
        let payload
        let {token} = req.headers
        const client = new OAuth2Client(process.env.CLIENT_ID)
        async function verify() {
          const ticket = await client.verifyIdToken({
              idToken: token,
              audience: process.env.CLIENT_ID
          });
          payload = ticket.getPayload();
          let email = payload.email
          User.findOne({
              where:{
                  email
              }
          })
          .then(user => {
            if(!user){
              const newUser = {
                email: payload.email,
                password: process.env.SECRET_PASSWORD
              }
              return User.create(newUser)
            }else{
              return user
            }
          })
          .then(data=> {
            const token = Helper.generateToken({id:data.id,email:data.email})
            res.status(200).json({token})
          })
          .catch(err => {
            next(err);
          })
        }
      verify().catch(err => next(err))
    }
}

module.exports = Controller