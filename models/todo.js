'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {

  }

  Todo.init({
    title: DataTypes.STRING,
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: DataTypes.BOOLEAN,
    due_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Todo'
  })
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};