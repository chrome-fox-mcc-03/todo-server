'use strict';

const { Todo } = require('../models');

class TodoController {
  static showAll(req, res, next) {
    Todo.findAll()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        res.send(err);
      });
  }
  static createTodo(req, res) {
    let { title, description, status, due_date } = req.body;
    Todo.create({
      title,
      description,
      status,
      due_date
    })
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        res.send(err);
      });
  }
  static showTodoById(req, res) {
    let { id } = req.params;
    let todoId = +id;
    Todo.findByPk(todoId)
      .then(result => {
        if (!result) {
          // next(err)
        } else {
          res.status(200).json(result);
        }
      })
      .catch(err => {
        res.send(err);
      });
  }
  static updateTodo(req, res) {
    let { title, description, status, due_date } = req.body;
    let updateId = +req.params.id;

    Todo.update(
      { title, description, status, due_date },
      {
        where: {
          id: updateId
        },
        returning: true
      }
    )
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        res.send(err);
      });
  }
  static deleteTodo(req, res) {
    let deleteId = +req.params.id;
    Todo.findByPk(deleteId)
      .then(result => {
        return Promise.all([
          result,
          Todo.destroy({
            where: {
              id: result.id
            }
          })
        ]);
      })

      .then(deleted => {
        if (!deleted) {
          // next(err);
        } else {
          res.send(200).json(deleted[0]);
        }
      })
      .catch(err => {
        res.send(err);
      });
  }
}

module.exports = { TodoController };
