'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {}
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due_date: {
      type: DataTypes.DATE,
      validate: {
        isAfter: {
          args: new Date().toDateString(), 
          msg: "date inputted should be at least starting from now"
        }
      } 
    },
    UserId: DataTypes.INTEGER
  }, { sequelize, validate: {
    isTitleNull() {
      if(!this.title) {
        throw new Error('title cannot be empty')
      }
    }
  } })

  Todo.associate = function (models) {
    Todo.belongsTo(models.User);
  };
  return Todo;
};