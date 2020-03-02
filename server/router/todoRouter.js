'use strict';

const express = require('express');
const router = express.Router();
const { Controller } = require('../controllers/Controller');

router.get('/', Controller.showAll);
router.post('/', Controller.createTodo);

router.get('/:id', Controller.showTodoById);
router.put('/:id', Controller.updateTodo);

router.delete('/:id', Controller.deleteTodo);

module.exports = { todoRouter: router };
