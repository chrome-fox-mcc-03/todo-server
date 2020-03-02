let { Todo } = require("../models");

class TodoController {
  static create(req, res) {
    let { title, description, status, due_date } = req.body;
    Todo.create({
      title,
      description,
      status,
      due_date
    })
      .then(data => {
        res.status(201).json(data);
      })
      .catch(err => {
        if (err.name === "SequelizeValidationError") {
          res.status(400).json({
            error: "Validation error"
          });
        } else {
          res.status(500).json(err);
        }
      });
  }

  static findAll(req, res) {
    Todo.findAll()
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).json(err));
  }

  static findId(req, res) {
    Todo.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        if (data.length > 0) {
          res.status(200).json(data[0]);
        } else {
          res.status(404).json({
            error: "error not found"
          });
        }
      })
      .catch(err => res.status(500).json(err));
  }

  static update(req, res) {
    let { title, description, status, due_date } = req.body;
    Todo.update(
      {
        title,
        description,
        status,
        due_date
      },
      {
        where: {
          id: req.params.id
        },
        returning: true
      }
    )
      .then(data => {
        if (data[0] === 0) {
          res.status(404).json({
            error: "error not found"
          });
        } else {
          res.status(200).json(data);
        }
      })
      .catch(err => res.status(500).json(err));
  }

  static delete(req, res) {
    let delData = null;
    Todo.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        if (data.length === 0) {
          res.status(404).json({
            error: "error not found"
          });
        } else {
          delData = data;
          return Todo.destroy({
            where: {
              id: req.params.id
            }
          });
        }
      })
      .then(deleted => {
        res.status(200).json(delData);
      })
      .catch(err => res.status(500).json(err));
  }
}

module.exports = TodoController;
