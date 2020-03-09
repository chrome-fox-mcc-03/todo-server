const bcrypt = require('bcryptjs');

function encode (password) {
	let salt = bcrypt.genSaltSync(10);
	let hash = bcrypt.hashSync(password, salt);
	return hash;
}

function compare (pass, dbpass) {
	return bcrypt.compareSync(pass, dbpass);
}

module.exports = {
	encode,
	compare
}