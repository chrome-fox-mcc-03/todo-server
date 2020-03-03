'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model 

  class Member extends Model {
    static associate(models) {}
  }
  
  Member.init({
    UserId: DataTypes.INTEGER,
    GroupId: DataTypes.INTEGER
  }, {sequelize});

  return Member;
};