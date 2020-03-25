const { Todo } = require("../models");
const axios = require("axios");
const { sendEmail } = require("../helpers/sendEmail");

class TodoController {
  static findAll(req, res, next) {
    Todo.findAll({
      where: {
        UserId: req.decoded.id
      }
    })
      .then(response => {
        res.status(200).json({
          data: response
        });
      })
      .catch(next);
  }

  static view(req, res, next) {
    Todo.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(response => {
        res.status(200).json({
          data: response
        });
      })
      .catch(next);
  }

  static createNewTodo(req, res, next) {
    let imageFound = false;
    let { title, description, status, due_date } = req.body;
    let titleQuery = title.split(" ").join("+");
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${titleQuery}&api_key=${process.env.GIPHY_KEY}&limit=1`
      )
      .then(({ data }) => {
        let giphy_url = data.data[0].images.downsized_large.url;
        imageFound = true;
        return Todo.create({
          title,
          description,
          status,
          due_date,
          photo: giphy_url,
          UserId: req.decoded.id
        });
      })
      .then(resCreated => {
        sendEmail(resCreated, req.decoded.email);
        res.status(201).json({
          data: resCreated
        });
      })
      .catch(err => {
        if (imageFound) {
          next(err);
        } else {
          next({
            status: 404,
            msg: "Image not found, please use a different title"
          });
        }
      });
  }

  static update(req, res, next) {
    let imageFound = false;
    let { title, description, due_date, status } = req.body;
    let titleQuery = title.split(" ").join("+");
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${titleQuery}&api_key=${process.env.GIPHY_KEY}&limit=1`
      )
      .then(({ data }) => {
        let giphy_url = data.data[0].images.downsized_large.url;
        imageFound = true;
        return Todo.update(
          {
            title,
            description,
            status,
            due_date,
            photo: giphy_url,
            UserId: req.decoded.id
          },
          {
            where: {
              id: req.params.id
            },
            returning: true
          }
        );
      })
      .then(resUpdated => {
        res.status(200).json({
          data: resUpdated
        });
      })
      .catch(err => {
        if (imageFound) {
          next(err);
        } else {
          next({
            status: 400,
            msg: "Image not found, please use a different title"
          });
        }
      });
  }

  static deleteTodo(req, res, next) {
    Todo.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => {
        res.status(200).json({
          msg: "Successfully deleted a Todo"
        });
      })
      .catch(next);
  }
}

module.exports = TodoController;
