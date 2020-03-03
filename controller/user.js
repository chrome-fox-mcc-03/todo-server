const {User} = require('../models')
const Helper = require('../helper/helper')

class Controller {
    static register(req, res) {
        User.create({
            email : req.body.email,
            password : req.body.password
        })
            .then(data=> res.status(201).json({id:data.id,email:data.email}))
            .catch(err=> res.status(400).json(err))
    }
    static login(req, res){
        User.findOne({
            where:{email : req.body.email}
        })
            .then(data => {
                if (Helper.comparePassword(req.body.password, data.password)){
                    const token = Helper.generateToken({id:data.id,email:data.email})
                    res.status(200).json(token)
                } else {
                    res.status(400).json('email / password are wong')
                }
            })
            .catch(err=> res.status(500).json(err))
    }
}

module.exports = Controller