'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class Todo extends Model {
    static associate (models) {
      Todo.belongsTo(models.Status)
      Todo.belongsTo(models.User)
    }
  }

  Todo.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    due_date: DataTypes.DATE,
    StatusId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize
  })

  return Todo;
};