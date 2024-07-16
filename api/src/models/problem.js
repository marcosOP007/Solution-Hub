const { DataTypes, Model } = require('sequelize');


class Problems extends Model {

  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      problem: DataTypes.STRING,
      date: DataTypes.STRING,
      solution: DataTypes.STRING,
    },{
      sequelize,
      modelName: 'Problem',
      tableName: 'Problems',
      timestamps: true,
      
  })
  }
  static associate(models) {
      this.belongsToMany(models.Tag, { foreignKey: 'problem_id', through: 'Tags_Problems', as: 'Tags' });
      this.belongsToMany(models.User, { foreignKey: 'problem_id', through: 'Users_Problems', as: 'Users' });
  }
}



module.exports = Problems;