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
    return queryInterface.bulkInsert('payments', [
      {
        id: 1,
        method: "Transfer Bank",
        total_product: 100,
        total_all: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        verificationId: 1
      },
      {
        id: 2,
        method: "E-wallet",
        total_product: 12,
        total_all: 568,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        verificationId: 1
      },
      {
        id: 3,
        method: "Credit Card",
        total_product: 234,
        total_all: 9000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        verificationId: 1
      },
      {
        id: 4,
        method: "Joint Account",
        total_product: 34,
        total_all: 346,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        verificationId: 1
      },
      {
        id: 5,
        method: "PayPal",
        total_product: 234,
        total_all: 678,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        verificationId: 1
      },
      {
        id: 6,
        method: "Cardless Credit",
        total_product: 35,
        total_all: 445,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        verificationId: 1
      },
      {
        id: 7,
        method: "Cash Retail",
        total_product: 2,
        total_all: 56,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        verificationId: 1
      },
      {
        id: 8,
        method: "Direct Debit",
        total_product: 12,
        total_all: 234,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        verificationId: 1
      },
      {
        id: 9,
        method: "QR Code",
        total_product: 40,
        total_all: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        verificationId: 1
      },
      {
        id: 10,
        method: "DP",
        total_product: 32,
        total_all: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        verificationId: 1
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
    return queryInterface.bulkDelete('payments', null, {});
  }
};