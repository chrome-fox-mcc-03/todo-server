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
    status: {
      type: DataTypes.BOOLEAN,
      validate: {
        checkBoolean(status) {
          if (status != false && status != true) {
            throw new Error("Status must be 'false' or 'true'")
          }
        }
      }
    },
    due_date: {
      type: DataTypes.DATE,
      validate: {
        dateIsPastToday(date) {
          let today = new Date()
          if (date < today) {
            throw new Error(`Date invalid, Date is past today`)
          }
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER
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