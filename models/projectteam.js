'use strict';
module.exports = (sequelize, DataTypes) => {
class ProjectTeam extends sequelize.Sequelize.Model {
    static associate ( models ) {
      ProjectTeam.belongsToMany(models.User,{ through: 'Project' })
      ProjectTeam.hasMany(models.Todo)
    }
  }

  ProjectTeam.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Please insert nameProject"
        }
      }
    }
  },{sequelize})

  return ProjectTeam
};