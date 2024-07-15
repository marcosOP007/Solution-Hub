'use strict';


module.exports = {
  async up (queryInterface, Sequelize){
    await queryInterface.createTable('Problems', {
      
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      problem: {
        type: Sequelize.STRING(2000),
        allowNull: false,
      },
      solution: {
        type: Sequelize.STRING(2000),
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },


    });
  },

  async down (queryInterface, Sequelize){
    await queryInterface.dropTable('Problems');
  }
};
