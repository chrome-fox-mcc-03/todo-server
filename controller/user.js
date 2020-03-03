const {User} = require('../models')
const Helper = require('../helper/helper')

class Controller {
    static register(req, res, next) {
        User.create({
            email : req.body.email,
            password : req.body.password
        })
            .then(data=> res.status(201).json({id:data.id,email:data.email}))
            .catch(err=> next(err))
    }
    static login(req, res, next){
        User.findOne({
            where:{email : req.body.email}
        })
            .then(data => {
                if (Helper.comparePassword(req.body.password, data.password)){
                    const token = Helper.generateToken({id:data.id,email:data.email})
                    res.status(200).json(token)
                } else {
                    throw ({message : 'Email / Password are Wrong'})
                }
            })
            .catch(err=> next(err))
    }
}

module.exports = Controller