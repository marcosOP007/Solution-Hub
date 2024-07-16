const { DataTypes, Model } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            permission: {
                type: DataTypes.ENUM('USER', 'ADMIN'),
                allowNull: false,
                defaultValue: 'USER',
            },
            password: {
                type: DataTypes.STRING(60),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(35),
                allowNull: false,
                unique: true,
            },
            status: {
                type: DataTypes.ENUM('ACTIVE', 'INACTIVE', 'SUSPENDED'),
                allowNull: false,
                defaultValue: 'ACTIVE',
            },
            last_login: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            photo: {
                type: Sequelize.BLOB, 
            },
        }, {
            sequelize,  
            modelName: 'User',
            tableName: 'Users',
            timestamps: true,
        })
    }

    static associate(models) {
        this.belongsToMany(models.Problem, { foreignKey: 'user_id', through: 'Users_Problems', as: 'Problems' });
    }
}

module.exports = User;

