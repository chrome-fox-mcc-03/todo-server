'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {}
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNull: {
          args: true,
          msg: "title cannot be empty"
        }
      }
    },
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due_date: {
      type: DataTypes.DATE,
      validate: {
        isAfter: {
          args: new Date().toDateString(), 
          msg: "date inputted should be at least starting from now"
        }
      } 
    }
  }, { sequelize })
  return Todo;
};