'use strict';
module.exports = (sequelize, DataTypes) => {

  class Todo extends sequelize.Sequelize.Model {

    static associate(models) {

    }

  }

  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Title cannot be empty!'
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
          msg: "Cannot back date, check your date!"
        }
      }
    }
  }, 
  {
    sequelize
  })

  return Todo;
};