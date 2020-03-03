const { Todo } = require("../models");

class TodoController {
  static create(req, res, next) {
    Todo.create({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date: req.body.due_date,
      UserId: req.decoded.id
    })
      .then(response => {
        res.status(201).json(response);
      })
      .catch(err => {
        next(err);
      });
  }

  static findAll(req, res) {
    Todo.findAll()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        next(err);
      });
  }

  static findId(req, res, next) {
    Todo.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(response => {
        if (response.length > 0) {
          res.status(200).json(response[0]);
        } else {
          next({
            status: 404,
            msg: "error not found"
          });
        }
      })
      .catch(err => next(err));
  }

  static update(req, res, next) {
    Todo.update(
      {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        due_date: req.body.due_date
      },
      {
        where: {
          id: req.params.id
        },
        returning: true
      }
    )
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        next(err);
      });
  }

  static delete(req, res, next) {
    let delData = null;
    Todo.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(response => {
        if (response) {
          delData = response;
          Todo.destroy({
            where: {
              id: req.params.id
            }
          });
        }
      })
      .then(resDeleted => {
        res.status(200).json(delData);
      })
      .catch(err => next(err));
  }
}

module.exports = TodoController;
