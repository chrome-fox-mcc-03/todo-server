'use strict';

class Controller {
  static showAll(req, res) {
    res.send(`Ini show all`);
  }
  static createTodo(req, res) {
    res.send(`Ini create todo`);
  }
  static showTodoById(req, res) {
    res.send(`Ini show todo by id`);
  }
  static updateTodo(req, res) {
    res.send(`Ini update Todo`);
  }
  static deleteTodo(req, res) {
    res.send(`Ini delete`);
  }
}

module.exports = { Controller };
