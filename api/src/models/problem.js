const { DataTypes, Model } = require('sequelize');


class Problems extends Model {

  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
      problem: DataTypes.STRING,
      date: DataTypes.STRING,
      solution: DataTypes.STRING,
    },{
      sequelize,
      tableName: 'Problems',
      timestamps: true,
      
  })
  }
  static associate(models) {
    // define association here
  }
}



module.exports = Problems;