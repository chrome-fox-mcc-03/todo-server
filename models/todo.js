'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {
    static associate(models) {
      Todo.belongsTo(models.User)
    }
  }
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please Fill Title'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please Fill Description'
        }
      }
    },
    status: DataTypes.BOOLEAN,
    due_date: DataTypes.DATE,
    UserId: DataTypes.INTEGER

  }, {
    validate: {
      dueDateCheck() {
        let now = new Date()
        if (this.due_date < now) throw new Error('Due Date must be greater than now')
      },
      statusCheck() {
        if (this.status !== true) this.status = false
      }
    },
    sequelize,
    modelName: 'Todo'
  })
  return Todo;
};