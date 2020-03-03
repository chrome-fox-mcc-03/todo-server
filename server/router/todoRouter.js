'use strict';

const express = require('express');
const router = express.Router();
const { TodoController } = require('../controllers/TodoController');
const { Authentication } = require('../middlewares/authentication');
const { ErrorHandler } = require('../middlewares/errorHandler');
const { Authorization } = require('../middlewares/authorization');

// router.use(Authentication.isAuthentic);

router.get('/', TodoController.showAll);
router.post('/', TodoController.createTodo);

router.get('/:id', TodoController.showTodoById);
router.put('/:id', TodoController.updateTodo);

// Authorization.isAuthorized
router.delete('/:id', TodoController.deleteTodo);

// router.use(errorHandler)

module.exports = { todoRouter: router };
