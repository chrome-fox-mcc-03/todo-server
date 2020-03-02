const { Todo } = require('../models');

class TodoController {
	static findAll (req, res) {
		Todo.findAll()
			.then(data => {
				res.status(200).json({
					data
				})
			})
			.catch(err => {
				res.status(500).json(err);
			})
	}

	static create (req, res) {
		Todo.create({
			title: req.body.title,
			description: req.body.description,
			status: req.body.status,
			due_date: req.body.due_date
		})
			.then(data => {
				res.status(200).json({
					data
				})
			})
			.catch(err => {
				res.status(500).json(err);
			})
	}
}

module.exports = TodoController