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
					next({
						status: 401,
						message: 'You are not authorized'
					});
				}
			} else {
				next({
					status: 404,
					message: 'To Do not found'
				});
			}
		})
		.catch(err => {
			next(err.errors);
		});
}

module.exports = authorization;