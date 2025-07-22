'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('articles',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: Sequelize.STRING(200),
          allowNull: false
        },
        slug: {
          type: Sequelize.STRING(250),
          allowNull: false
        },
        featured_image: { // aqui vou guardar o filename da imagem
          type: Sequelize.STRING(500),
          allowNull: false
        },
        excerpt: { // display description
          type: Sequelize.STRING(500),
          allowNull: false
        },
        contents: { // conteudo principal
          type: Sequelize.STRING,
          allowNull: false
        },
        status: {
          type: Sequelize.ENUM("draft", "published", "archived"),
          defaultValue: "draft"
        },
        category: {
          type: DataTypes.STRING,
          allowNull: false
        },
        category_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Categories",
            key: "id"
          },
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT'
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
      }
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
