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
    return queryInterface.bulkInsert('stocks', [
      {
        id: 1,
        code: "CTY009",
        name: "Pensil",
        qty: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 1
      },
      {
        id: 2,
        code: "CTY099",
        name: "Kursi",
        qty: 679,
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 3
      },
      {
        id: 3,
        code: "POK072",
        name: "Kipas",
        qty: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 2
      },
      {
        id: 4,
        code: "ABD091",
        name: "Rol",
        qty: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 5
      },
      {
        id: 5,
        code: "WRY009",
        name: "Meja",
        qty: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 3
      },
      {
        id: 6,
        code: "HOJ0111",
        name: "Tangga",
        qty: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 3
      },
      {
        id: 7,
        code: "FOK006",
        name: "Kostum",
        qty: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 8
      },
      {
        id: 8,
        code: "GOD005",
        name: "Kabel",
        qty: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 7
      },
      {
        id: 9,
        code: "PCL033",
        name: "Tas",
        qty: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 4
      },
      {
        id: 10,
        code: "IOY104",
        name: "Lampu",
        qty: 835000,
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 2
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
    return queryInterface.bulkDelete('stocks', null, {});
  }
};