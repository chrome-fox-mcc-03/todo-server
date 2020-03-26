'use strict';

const { Todo } = require('../models');

class TodoController {
  static showAll(req, res, next) {
    const id = req.loginId;
    Todo.findAll({
      where: {
        UserId: id
      }
    })
      .then(todos => {
        res.status(200).json(todos);
      })
      .catch(next);
  }

  static createTodo(req, res, next) {
    let UserId = req.loginId;
    let { title, description, status, due_date } = req.body;

    if (!status) {
      status = false;
    } else {
      status = true;
    }

    Todo.create({
      title,
      description,
      status,
      due_date,
      UserId
    })
      .then(result => {
        res.status(201).json(result);
      })
      .catch(next);
  }

  static showTodoById(req, res, next) {
    const todoId = +req.params.id
    Todo.findByPk(todoId)
      .then(result => {
        if (!result) {
          // 404 not found
          next({
            status: 404,
            message: 'Not Found'
          });
        } else {
          res.status(200).json(result);
        }
      })
      .catch(next);
  }

  static updateTodo(req, res, next) {
    let id = +req.body.id
    const payload = {
      title: req.body.title,
      description: req.body.title,
      status: req.body.status,
      due_date: req.body.due_date
    }
    Todo.update(payload, {
      where: {
        id
      },
      returning: true
    }).then(result => {
      res.status(201).json(result[1][0]);
    }).catch(next);
  }
  static deleteTodo(req, res, next) {
    let deleteId = +req.params.id;
    Todo.findByPk(deleteId)
      .then(result => {
        return Todo.destroy({
          where: {
            id: result.id
          }
        });
      })
      .then(deleted => {
        if (!deleted) {
          // 404
          next({
            status: 404,
            message: `Not Found`
          });
        } else {
          res.status(200).json(deleted);
        }
      })
      .catch(next);
  }
}

module.exports = { TodoController };
