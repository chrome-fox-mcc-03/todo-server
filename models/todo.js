'use strict';
const dateHelpper = require('../helper/Datenow')
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {
    static associate ( models ) {
      Todo.belongsTo(models.ProjectTeam)
      Todo.belongsTo(models.User)
    }
  }

  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Please insert title"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Please Insert description"
        }
      }
    },
    status: {
      type : DataTypes.BOOLEAN
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isAfter: {
          args: dateHelpper,
          msg: 'Please insert ' + dateHelpper
        }
      }
    },
    ProjectTeamId: {
      type: DataTypes.INTEGER
    },
    UserId: {
      type: DataTypes.INTEGER
    }
  },{sequelize})

  return Todo
};