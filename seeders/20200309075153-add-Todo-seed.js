'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let dataTodos = [{
      title:'Swim',
      description:'Happy swim',
      due_date: 04/28/2020,
      UserId:1
    },{
      title:'Run',
      description:'Happy run in sunday morning',
      due_date: 04/28/2020,
      UserId:2
    },{
      title:'Jump From Public Building',
      description:'Happy jump from public building xD',
      due_date: 04/28/2020,
      UserId:3
    },
    {
      title:'Listen Music',
      description:'Listen music in sunday morning',
      due_date: 04/28/2020,
      UserId:3
    }]
    return queryInterface.bulkInsert('Todos', dataTodos, {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Todos', null, {});
  }
};
