'use strict';

const { verifyToken } = require('../helpers/generateToken');
const { User } = require('../models');

class Authentication {
  static isAuthentic(req, res, next) {
    const token = req.headers.token;
    const decoded = verifyToken(token);
    req.loginId = decoded.id;
    try {
      User.findByPk(req.loginId).then(user => {
        if (user) {
          next();
        } else {
          next(err);
        }
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = { Authentication };
