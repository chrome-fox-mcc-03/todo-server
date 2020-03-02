'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Todos', [{
            title: 'Title1',
            description: 'Description1',
            status: false,
            due_date: new Date(),
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            title: 'Title2',
            description: 'Description2',
            status: true,
            due_date: new Date(),
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
	},

	down: (queryInterface, Sequelize) => {
       return queryInterface.bulkDelete('Todos', null, {});
	}
};
