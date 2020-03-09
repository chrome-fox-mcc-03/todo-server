module.exports = function (err, req, res, next) {
	console.log(err);
	if (err.name === 'JsonWebTokenError') {
		res.status(401).json({msg: 'Please Sign In'});
	} else if (err.name === 'SequelizeUniqueConstraintError') {		
		let errmsg = err.errors.map(el => el.message);
		res.status(400).json({msg: errmsg});
	} else if (err.name === 'SequelizeValidationError') {
		let errmsg = err.errors.map(el => el.message);
		res.status(400).json({msg: errmsg});
	} else {
		res.status(err.status || 500).json({msg: err.message || 'Internal Server Error'});
	}
}