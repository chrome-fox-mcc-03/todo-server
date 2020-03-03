'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Task extends Model {
    static associate(models){
      Task.belongsTo(models.User)
    }
  }
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    due_date: DataTypes.DATE,
    UserId: DataTypes.INTEGER
  },
  {
    sequelize
  })
  return Task;
};