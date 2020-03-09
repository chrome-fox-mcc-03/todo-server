'use strict';

const { Todo } = require('../models');

class Authorization {
  static isAuthorized(req, res, next) {
    let id = +req.params.id;

    Todo.findByPk(id).then(todo => {
      if (todo) {
        if (todo.UserId === req.loginId) {
          next()
        } else {
          next({
            status: 401,
            message: `You are not authorized`
          })
        }
      } else {
        next({
          status: 404,
          message: `Todo not found`
        })
      }
    }).catch(next);
  }
}

module.exports = { Authorization };
