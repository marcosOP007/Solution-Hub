'use strict';

module.exports = {
  async up (queryInterface, Sequelize){
    await queryInterface.createTable('Tags', {
      
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },


    });
  },

  async down (queryInterface, Sequelize){
    await queryInterface.dropTable('Tags');
  }
};
