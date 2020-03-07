const { User } = require('../models')
const { signToken } = require('../helper/HelperJwt')
const { comparepw } = require('../helper/HelperBcrypt')
const {OAuth2Client} = require('google-auth-library');
const client_id = process.env.CLIENT_ID
const client = new OAuth2Client(client_id);
class ControllerUser {
    static findAll(req, res, next) {
    User.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
    }
    static register(req, res, next) {
    const { username, email, password } = req.body
      User.create({
        username,
        email,
        password
      }) 
        .then(data => {
          res.status(201).json(data)
        })
        .catch(err => {
          next(err)
        })
    }
    static login(req, res, next) {
    const { email, password } = req.body
    User.findOne(
      {
        where: {
          email
        }
      }
    )
      .then(data => {
          if(data != null) {
            if(password == undefined){
                next({
                  name: 'costume',
                  status: 403,
                  message: "Please Insert Password"
                })
            }else{
            const compare = comparepw(password,data.password)
            if(compare){
                const payload = 
                {
                  id: data.id,
                  email
                }
                const token = signToken(payload)
                res.status(200).json(token)
            }else{
                next({
                  name: "costume",
                  status: 403,
                  message: "Wrong Passowrd"
                })
              }
            }
          }else{
            next({
              name: "costume",
              status:404,
              message: "Email doesn't exist"
            })
          }
      })
      .catch(err => {
          next(err)
      })
    }
    static loginGoogle(req, res, next) {
      let data = ''
      client.verifyIdToken(
        {
          idToken: req.headers.token,
          audience: client_id
        }
      )
        .then(result => {
          data = result.payload
          console.log(data)
          return User.findOne({
            where: {
              email: data.email
            }
          })
        })
        .then(result => {
          if(result) {
            return result
          }else{
            return User.create({
                username: data.email,
                email: data.email,
                password: process.env.PASSWORD_GOOGLE
            })
          }
        })
        .then(data => {

          let payload = 
          {
            id: data.id,
            email: data.email,
          }
          let token = signToken(payload)
          res.status(200).json(token)
        })
        .catch(err => {
          next(err)
        })
    }
}

module.exports = ControllerUser