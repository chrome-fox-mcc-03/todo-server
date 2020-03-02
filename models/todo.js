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
    description: DataTypes.STRING,
    status:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    due_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Todo'
  });
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};