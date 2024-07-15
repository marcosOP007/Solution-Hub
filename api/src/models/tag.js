const { DataTypes, Model } = require('sequelize');

class Tags extends Model {
  static init(sequelize){
    super.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },

        
      },{
        sequelize,
        timestamps: true,
        modelName: 'Tag',
        tableName: 'Tags',
      }
    );
  }

  static associate(models) {
        this.belongsToMany(models.Problem, { foreignKey: 'tag_id', through: 'Tags_Problems', as: 'Problems' });

  }
}

module.exports = Tags;
