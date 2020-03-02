'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model{}
  Todo.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: 'No description.'
    },
    status:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    due_date: {
      type: DataTypes.DATE,
      validate: {
        isDateValid(value){
          if(new Date(value) < new Date()) {
            throw new Error('Date not valid')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Todo'
  });
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};