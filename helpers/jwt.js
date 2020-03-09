const jwt = require('jsonwebtoken');

function sign (payload) {
	return jwt.sign(payload, process.env.PKEY);
}

function verify (hash) {
	return jwt.verify(hash, process.env.PKEY);
}


module.exports = {
	sign,
	verify
}