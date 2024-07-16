const { DataTypes, Model } = require('sequelize');

class Tag_Problem extends Model {
    static init(sequelize) {
        super.init({ }, {
            sequelize,
            modelName: 'User_Problem',
            tableName: 'Users_Problems',
        })
    }
}

module.exports = Tag_Problem;

