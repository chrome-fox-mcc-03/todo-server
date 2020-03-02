'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {}
  Todo.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
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