const { User } = require('../models');

class Controller {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;
  
      const newUser = await User.create({
        email,
        password,
      });
      
      res.status(201).json(newUser);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = Controller;
