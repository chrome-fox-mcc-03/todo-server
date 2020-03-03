'use strict';
const convert = require('../helpers/date-converter.js');
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class Todo extends Model {
    static associate(models) {
      Todo.belongsTo(models.User, { foreignKey: 'userId' });
      Todo.belongsTo(models.Project, { foreignKey: 'projectId' });
    }
  }

  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true, msg: 'Title cannot be empty',
        },
        notNull: {
          msg: 'Title should be filled',
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true, msg: 'Description cannot be empty',
        },
        notNull: {
          msg: 'Description should be filled',
        },
      },
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Status should be filled',
        },
      },
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Date should be filled',
        },
        isAfter: {
          args: convert(new Date()),
          msg: 'Time should not be older than today',
        },
      },
    },
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
  }, {
    sequelize,
    hooks: {

    },
  });
  return Todo;
};