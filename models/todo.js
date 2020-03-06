'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {};
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Title cannot be null"
        },
        notEmpty: {
          args: true,
          msg: "Title cannot be empty string"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Description cannot be null"
        },
        notEmpty: {
          args: true,
          msg: "Description cannot be empty string"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Status cannot be null"
        },
        isIn: {
          args: [['todo', 'completed']],
          msg: "Status allowed ['todo', 'completed']"
        }
      }
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Date cannot be null"
        },
        isDate: {
          args: true,
          msg: "Unable to parse date from input"
        },
        isAfter: {
          args: new Date().toDateString(),
          msg: "Cannot set past time as due date"
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: "Todo"
  });
  // Todo.addHook('beforeCreate', (todo, options) => {
  //   todo.status = 'todo';
  // });
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User);
  };
  return Todo;
};