"use strict";
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Todo extends Model {}

  Todo.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "title must be filled"
          },
          notEmpty: {
            args: true,
            msg: "title must be filled"
          }
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "description must be filled"
          },
          notEmpty: {
            args: true,
            msg: "description must be filled"
          },
          len: {
            args: [5],
            msg: "todo's description must be longer than 5 characters"
          }
        }
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: {
            msg: "status must be filled"
          },
          notEmpty: {
            args: true,
            msg: "status must be filled"
          }
        }
      },
      due_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "due date must be filled"
          },
          notEmpty: {
            args: true,
            msg: "due date must be filled"
          },
          isAfter: {
            args: String(new Date()),
            msg: "due date must be later than now"
          }
        }
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "todo must belong to someone"
          }
        }
      }
    },
    {
      hooks: {
        beforeValidate: (todo, options) => {
          if (!todo.status) {
            todo.status = false;
          }
        }
      },
      sequelize,
      modelName: "Todo"
    }
  );

  Todo.associate = function(models) {
    Todo.belongsTo(models.User);
  };
  return Todo;
};
