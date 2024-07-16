'use strict';

module.exports = {
  async  up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users_Problems', {
      user_id: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {
          model: 'Users', 
          key: 'id', 
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      problem_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Problems', 
          key: 'id', 
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },

    });
  },

  async down (queryInterface, Sequelize){
    await queryInterface.dropTable('Users_Problems');
  },
};

