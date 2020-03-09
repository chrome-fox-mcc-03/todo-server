'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [{
			name: 'John Doe',
			email: 'john@doe.com',
			password: '$2a$10$xDi7WNURHRIVRGJ81zRFOuA2zryTIhrqyqpqn0Nz68RJiQ9uVYcvC',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: 'Jane Doe',
			email: 'jane@doe.com',
			password: '$2a$10$xDi7WNURHRIVRGJ81zRFOuA2zryTIhrqyqpqn0Nz68RJiQ9uVYcvC',
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	}
};
