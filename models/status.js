'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Status extends Model {
    static associate (models) {
      Status.hasMany(models.Todo)
    }
  }

  Status.init({
    name: DataTypes.STRING
  }, {
    sequelize
  })
 
  return Status;
};