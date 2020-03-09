'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {
    static associate(models) {
      Todo.belongsTo(models.User);
    }
  }

  Todo.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: `Title cannot be empty`
          }
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: `Title cannot be empty`
          }
        }
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValues: false
      },
      due_date: {
        type: DataTypes.DATE,
        validate: {
          isAfter: {
            args: `${new Date().toLocaleString()}`,
            msg: `The due date should be after the current date`
          }
        }
      },
      UserId: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: 'Todo'
    }
  );

  return Todo;
};
