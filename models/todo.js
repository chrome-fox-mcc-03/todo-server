'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model{}
  Todo.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: '01: Name cannot be empty'
        }
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
        isAfter: {
          args: String(new Date()),
          msg: '02: Due date must be in the future.'
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