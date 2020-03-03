'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model{}
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {args: true, msg: "Please fill title of your note"},   //true
        len: {args: [4], msg: "Please add title at least 4 character"}    // ! [3, 120]
      }
    },
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {args: true, msg: "Please add your due Task"},
        isAfter: {args: new Date().toISOString(), msg: "Your due minimum must due today"} ,  //new Date().toISOString()
      }
    }
  }, {sequelize, modelName: 'Todo'})

  // const Todo = sequelize.define('Todo', {
  //   title: DataTypes.STRING,
  //   description: DataTypes.STRING,
  //   status: DataTypes.BOOLEAN,
  //   due_date: DataTypes.DATE
  // }, {});

  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};