const { Todo } = require('../models');

class Controller {
  static async create(req, res, next) {
    const { title, description, status, due_date, } = req.body;
    try {
      const newTask = await Todo.create({
        title,
        description,
        status,
        due_date,
        userId: req.decoded.id,
      });
      res.status(201).json(newTask);
    } catch (err) {
      next(err);
    }
  }

  static async findAll(req, res, next) {
    try {
      const todos = await Todo.findAll({
        where: {
          userId: req.decoded.id,
        }
      });
      res.status(200).json(todos);
    } catch(err) {
      next(err);
    }
  } 
}

module.exports = Controller;
