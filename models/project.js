'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class Project extends Model {
    static associate(models) {
      Project.hasMany(models.Todo, { foreignKey: 'id' });
      Project.belongsToMany(models.User, {
        through: 'UserProject',
      });
    }
  }

  Project.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Project name cannot be null' },
        notEmpty: {
          args: true,
          msg: 'Project name cannot be empty',
        },
      },
    },
  }, {
    sequelize,
    hooks: {

    },
  });
  return Project;
};