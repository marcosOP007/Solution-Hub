'use strict';

module.exports = {
  async  up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tags_Problems', {
      tag_id: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {
          model: 'Tags', 
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
    await queryInterface.dropTable('Tags_Problems');
  },
};

