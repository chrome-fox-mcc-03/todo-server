const { User } = require('../models/index.js');

class UserController {
    static signUp(req, res) {        
        let { email, password } = req.body;
        User.create({
            email,
            password
        })
        .then(result => {
            let payload = {
                id: result.id,
                email: result.email
            } 
            res.status(200).json(payload);
        })
        .catch(error => {
            res.status(500).json(error);
        })
    }
}

module.exports = UserController