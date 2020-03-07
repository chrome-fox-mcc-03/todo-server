'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model { }
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please enter title'
        },
        notNull: {
          msg: 'Please enter title'
        }
      }
    },
    description: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please enter status'
        },
        notNull: {
          msg: 'Please enter status'
        }
      }
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please enter due date'
        },
        notNull: {
          msg: 'Please enter due date'
        },
        customValidator(value) {
          if (!this.id) {
            let now = new Date();
            let date = new Date(value);
            if (date == "invalid date" || date < now) {
              throw new Error("due_date must be greater than now!");
            }
          }
        }
      }
    },
    UserId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please enter UserId'
        },
        notNull: {
          msg: 'Please enter UserId'
        }
      }
    }
  }, {
    hooks: {
      beforeValidate: (data, options) => {
        if (data.status != "done") {
          data.status = "pending";
        }
      }
    },
    sequelize,
    modelName: 'Todo'
  });

  Todo.associate = function (models) {
    Todo.belongsTo(models.User);
  };
  return Todo;
};