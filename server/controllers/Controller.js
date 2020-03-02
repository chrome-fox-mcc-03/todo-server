'use strict';

const { Todo } = require('../models');

class Controller {
  static showAll(req, res) {
    Todo.findAll()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(500).json(err);
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
        if (err.name === 'SequelizeValidationError') {
          res.status(400).json(err);
        } else {
          res.status(500).json(err);
        }
      });
  }
  static showTodoById(req, res) {
    let { id } = req.params;
    let todoId = +id;
    Todo.findByPk(todoId)
      .then(result => {
        if (!result) {
          throw err;
        } else {
          res.status(200).json(result);
        }
      })
      .catch(err => {
        res.status(404).json({ err: `Todo not found` });
      });
  }
  static updateTodo(req, res) {
    let { title, description, status, due_date } = req.body;
    let updateId = +req.params.id;
    let errorStatus;

    Todo.update(
      { title, description, status, due_date },
      {
        where: {
          id: updateId
        }
      }
    )
      .then(result => {
        if (!result) {
          errorStatus = 400;
        } else {
          return Todo.findByPk(result[0]);
        }
      })
      .then(todo => {
        res.send(200).json(todo);
      })
      .catch(err => {
        if (err.name === 'SequelizeValidationError') {
          errorStatus = 404;
        } else {
          errorStatus = 500;
        }
        if (errorStatus === 400) {
          res.status(400).json(err);
        } else if (errorStatus === 404) {
          res.status(404).json({ err: `Todo Not Found` });
        } else {
          res.status(500).json(err);
        }
      });
  }
  static deleteTodo(req, res) {
    let deleteId = +req.params.id;
    let deleteStatus;
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
          deleteStatus = 404;
        } else {
          res.send(200).json(deleted[0]);
        }
      })
      .catch(err => {
        if ((deleteStatus = 404)) {
          res.status(404).json({ err: `Todo cannot be found` });
        } else {
          res.status(500);
        }
      });
  }
}

module.exports = { Controller };
