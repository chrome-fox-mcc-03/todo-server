const { verify } = require('../helpers/jwt');
const { User } = require('../models');

function authentication (req, res, next) {
	try {
		let token = req.headers.token
		req.decode = verify(token)

		User.findOne({
			where: { email: req.decode.email }
		})
			.then(result => {
				if (result && req.decode.id === result.id) {
					next();
				} else {
					next({
						status: 401,
						message: 'Please Sign In'
					});
				}
			})
			.catch(err => {
				next(err.errors)
			})
	} catch (err) {
		next(err.errors)
	}
}

module.exports = authentication;