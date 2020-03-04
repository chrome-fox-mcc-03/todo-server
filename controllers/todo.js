const { Todo } = require("../models");
const axios = require("axios").default;

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
        const sendEmail = axios.create({
          baseURL: "https://fancytodo-2089.restdb.io",
          headers: {
            "x-apikey": "f2d55c37784a8b87cd35996e92de71be65309"
          }
        });
        sendEmail.post("/mail", {
          to: req.decoded.email,
          subject: "You have created a new Todo",
          html: `<p>Remember to ${response.title} before ${response.due_date}</p>`,
          company: "fadhilahm's fancy todo app",
          sendername: "fadhilahm's fancy todo app Support"
        });
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
