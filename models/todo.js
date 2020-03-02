'use strict';
module.exports = (sequelize, DataTypes) => {
  class todo extends sequelize.Sequelize.Model {}
  todo.init({
    title: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    description: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    status: { 
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: "todo"
  })
  todo.associate = function(models) {
    // associations can be defined here
  };
  return todo;
};