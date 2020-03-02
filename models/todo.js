'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model{}
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: [3, 120]
      }
    },
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: true,
        isAfter: new Date().toISOString() ,
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