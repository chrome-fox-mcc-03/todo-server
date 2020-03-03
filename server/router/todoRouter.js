'use strict';

const express = require('express');
const router = express.Router();
const { TodoController } = require('../controllers/TodoController');
const { Authentication } = require('../middlewares/authentication');
const { Authorization } = require('../middlewares/authorization');

router.use(Authentication.isAuthentic);

router.get('/', TodoController.showAll);
router.post('/', TodoController.createTodo);

router.get('/:id', TodoController.showTodoById);
router.put('/:id', Authorization.isAuthorized, TodoController.updateTodo);

// Authorization.isAuthorized
router.delete('/:id', Authorization.isAuthorized, TodoController.deleteTodo);

module.exports = { todoRouter: router };
