'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('types', [
      {
        id: 1,
        name: "Rapuh",
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 1
      },
      {
        id: 2,
        name: "Kuat",
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 1
      },
      {
        id: 3,
        name: "Rentan",
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 1
      },
      {
        id: 4,
        name: "Pendek",
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 1
      },
      {
        id: 5,
        name: "Panjang",
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 1
      },
      {
        id: 6,
        name: "Kecil",
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 1
      },
      {
        id: 7,
        name: "Keras",
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 1
      },
      {
        id: 8,
        name: "Lentur",
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 1
      },
      {
        id: 9,
        name: "Medium",
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 1
      },
      {
        id: 10,
        name: "Besar",
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 1
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('types', null, {});
  }
};