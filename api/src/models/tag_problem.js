const { DataTypes, Model } = require('sequelize');

class Tag_Problem extends Model {
    static init(sequelize) {
        super.init({ }, {
            sequelize,
            modelName: 'Tag_Problem',
            tableName: 'Tag_Problem',
        })
    }
}

module.exports = Tag_Problem;

