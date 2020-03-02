"use strict";
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {
    static associate(models) {}
  }

  Todo.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      due_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isAfter: {
            args: String(new Date()),
            msg: "Due date must be later than now"
          }
        }
      }
    },
    {
      sequelize,
      modelName: "Todo"
    }
  );

  return Todo;
};
