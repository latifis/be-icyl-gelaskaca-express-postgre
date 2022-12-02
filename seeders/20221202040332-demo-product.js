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
    return queryInterface.bulkInsert('products', [
      {
        id: 1,
        name: "Kursi",
        price: 20000,
        desc: "NO-DESC",
        createdAt: new Date(),
        updatedAt: new Date(),
        cartId: 1,
        categoryId: 1
      },
      {
        id: 2,
        name: "Meja",
        price: 35000,
        desc: "NO-DESC",
        createdAt: new Date(),
        updatedAt: new Date(),
        cartId: 3,
        categoryId: 1
      },
      {
        id: 3,
        name: "AC",
        price: 260000,
        desc: "NO-DESC",
        createdAt: new Date(),
        updatedAt: new Date(),
        cartId: 1,
        categoryId: 1
      },
      {
        id: 4,
        name: "Kipas",
        price: 560000,
        desc: "NO-DESC",
        createdAt: new Date(),
        updatedAt: new Date(),
        cartId: 2,
        categoryId: 1
      },
      {
        id: 5,
        name: "Lampu",
        price: 320000,
        desc: "NO-DESC",
        createdAt: new Date(),
        updatedAt: new Date(),
        cartId: 2,
        categoryId: 1
      },
      {
        id: 6,
        name: "Kabel",
        price: 420000,
        desc: "NO-DESC",
        createdAt: new Date(),
        updatedAt: new Date(),
        cartId: 4,
        categoryId: 1
      },
      {
        id: 7,
        name: "Mic",
        price: 520000,
        desc: "NO-DESC",
        createdAt: new Date(),
        updatedAt: new Date(),
        cartId: 5,
        categoryId: 1
      },
      {
        id: 8,
        name: "Speaker",
        price: 820000,
        desc: "NO-DESC",
        createdAt: new Date(),
        updatedAt: new Date(),
        cartId: 3,
        categoryId: 1
      },
      {
        id: 9,
        name: "Sound",
        price: 320000,
        desc: "NO-DESC",
        createdAt: new Date(),
        updatedAt: new Date(),
        cartId: 2,
        categoryId: 1
      },
      {
        id: 10,
        name: "Lemari",
        price: 345000,
        desc: "NO-DESC",
        createdAt: new Date(),
        updatedAt: new Date(),
        cartId: 6,
        categoryId: 1
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
    return queryInterface.bulkDelete('products', null, {});
  }
};