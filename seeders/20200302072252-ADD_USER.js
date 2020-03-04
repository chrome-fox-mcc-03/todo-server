'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [{
			name: 'John Doe',
			email: 'john@doe.com',
			password: '$2a$10$vRsFVkQY3udyhFXoZQW.DuL6jRi2SuzNsis11Vp4UXjMaS/2ghb12',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: 'Jane Doe',
			email: 'jane@doe.com',
			password: '$2a$10$vRsFVkQY3udyhFXoZQW.DuL6jRi2SuzNsis11Vp4UXjMaS/2ghb12',
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	}
};
