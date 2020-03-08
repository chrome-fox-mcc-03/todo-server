'use strict';

const { Todo } = require('../models');

class Authorization {
  static isAuthorized(req, res, next) {
    let id = +req.params.id;
    Todo.findOne({
      where: {
        id,
        UserId: req.loginId
      }
    }).then(todo => {
      if (todo) {
        next()
      } else {
        next({
          status: 401,
          message: 'Not Authorized'
        });
      }
    }).catch(next);
  }
}

module.exports = { Authorization };
