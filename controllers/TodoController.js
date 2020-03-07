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
      if (todos.length) {
        res.status(200).json(todos);
      } else {
        const error = {
          status: 404,
          message: 'No todo found',
        }
        next(error);
      }
    } catch(err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      await Todo.destroy({
        where: {
          id: req.params.id,
        }
      })
      const obj = {
        message: `Success deleted task ${req.params.id}`,
      }
      res.status(200).json(obj);
    } catch {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const { title, description, status, due_date, } = req.body;
      const todo = await Todo.update({
        title,
        description,
        status,
        due_date,
      }, {
        where: { id: req.params.id, },
        returning: true,
      });
      if (todo[0] === 1) {
        const data = todo[1][0];
        const payload = {
          id: data.id,
          title: data.title,
          description: data.description,
          due_date: data.due_date,
        };

        const message = `Success updating todo ${req.params.id}`;
        res.status(200).json({ payload, message });
      } else {
        const error = {
          status: 404,
          message: 'Todo not found',
        }
        next(error);
      }
    } catch (err) {
      next(err);
    }
    
  }

  static async findOne(req, res, next) {
    try {
      const todo = await Todo.findOne({
          where: { id: req.params.id },
        });
        if (todo) {
          res.status(200).json(todo);
        } else {
          const error = {
            status: 404,
            message: 'Not found',
          };
          next(error);
        }
    } catch (err) {
      next(err);
    }
  }

  static async updateStatus(req, res, next) {
    try {
      const { status } = req.body;
      const todo = await Todo.update({
        status
      }, {
        where: { id: req.params.id },
        returning: true,
      });

      if (todo[0] === 1) {
        const data = todo[1][0];
        const payload = {
          status: data.status,
        };

        const message = `Success updating todo ${req.params.id}`;
        res.status(200).json({ payload, message });
      } else {
        const error = {
          status: 404,
          message: 'Todo not found',
        }
        next(error);
      }

    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
