'use strict';

const { Todo } = require('../models/todo');

class Authorization {
  static isAuthorized(req, res, next) {
    let id = +req.params.id;
    Todo.findByPk(id)
      .then(todo => {
        if (todo) {
          if (todo.UserId === req.loginId) {
            next();
          } else {
            next(err);
          }
        } else {
          next(err);
        }
      })
      .catch(next);
  }
}

module.exports = { Authorization };
