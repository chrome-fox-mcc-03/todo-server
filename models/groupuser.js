'use strict';
module.exports = (sequelize, DataTypes) => {
  class GroupUser extends sequelize.Sequelize.Model {
    static associate(models) {
      GroupUser.belongsTo(models.Group)
      GroupUser.belongsTo(models.User)
    }
  }
  GroupUser.init({
    GroupId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  },{ sequelize })
  return GroupUser;
};