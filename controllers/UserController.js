const { User } = require('../models');
const { generateToken } = require('../helpers/jwtoken');
const { compare } = require('../helpers/bcrypt');

class Controller {
  static async register(req, res, next) {
    try {
      const {
        email,
        password,
      } = req.body;

      const newUser = await User.create({
        email,
        password,
      });
      const payload = {
        id: newUser.id,
        email: newUser.email,
      }
      res.status(201).json(payload);
    } catch (err) {
      next(err);
    };
  }

  static async login(req, res, next) {
    try {
      const {
        email,
        password,
      } = req.body;

      const user = await User.findOne({
        where: {
          email,
        }
      });

      if (user) {
        if (compare(password, user.password)) {
          const payload = {
            id: user.id,
            email: user.email,
            projectId: user.projectId,
          }
          const token = generateToken(payload);
          res.status(200).json(token);
        } else {
          const error = {
            status: 401,
            message: 'Username or password is invalid',
          };
          next(error);
        }
      } else {
        const error = {
          status: 401,
          message: 'Username or password is invalid',
        };
        next(error);
      }
    } catch (err) {
      next(err);
    };
  }
}

module.exports = Controller;
