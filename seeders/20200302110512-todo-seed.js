'use strict';

const data = [
  {
    title: 'Learning Fundamental Javascript',
    description: 'Reminder Self-Pace Learning',
    status: false,
    due_date: new Date('2020-03-25')
  },
  {
    title: 'Learning Rest Api',
    description: 'Course Material for Second Phase',
    status: false,
    due_date: new Date('2020-03-25')
  }
];

data.map(each => {
  each.UserId = null;
  each.createdAt = new Date();
  each.updatedAt = new Date();
  return data;
});

console.log(data);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
