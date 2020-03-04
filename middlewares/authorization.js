const { Todo } = require('../models');

function authorization (req, res, next) {
	let { id } = req.params;

	Todo.findOne({
		where: {id}
	})
		.then(result => {
			if (result) {
				if (result.UserId === req.decode.id) {
					next();
				} else {
					res.status(401).json('You are not authorized');
				}
			} else {
				res.status(404).json('To Do not found');
			}
		})
		.catch(err => {
			res.status(500).json(err)
		});
}

module.exports = authorization;