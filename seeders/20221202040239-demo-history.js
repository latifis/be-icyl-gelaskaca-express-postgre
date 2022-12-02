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
    return queryInterface.bulkInsert('histories', [
      {
        id: 1,
        invoice: "https://gelaskaca.com/pdf/invoice-000101232123123.pdf",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        rentId: 2,
        historyStatusId: 1
      },
      {
        id: 2,
        invoice: "https://gelaskaca.com/pdf/invoice-000101232123123.pdf",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 9,
        rentId: 5,
        historyStatusId: 2
      },
      {
        id: 3,
        invoice: "https://gelaskaca.com/pdf/invoice-123213123123123.pdf",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        rentId: 3,
        historyStatusId: 2
      },
      {
        id: 4,
        invoice: "https://gelaskaca.com/pdf/invoice-0001012334343123.pdf",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        rentId: 4,
        historyStatusId: 3
      },
      {
        id: 5,
        invoice: "https://gelaskaca.com/pdf/invoice-0001012321123123.pdf",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 8,
        rentId: 4,
        historyStatusId: 1
      },
      {
        id: 6,
        invoice: "https://gelaskaca.com/pdf/invoice-000101245002123.pdf",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
        rentId: 4,
        historyStatusId: 2
      },
      {
        id: 7,
        invoice: "https://gelaskaca.com/pdf/invoice-000101234123123.pdf",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        rentId: 7,
        historyStatusId: 3
      },
      {
        id: 8,
        invoice: "https://gelaskaca.com/pdf/invoice-000101109023123.pdf",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        rentId: 1,
        historyStatusId: 3
      },
      {
        id: 9,
        invoice: "https://gelaskaca.com/pdf/invoice-00123232123123.pdf",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        rentId: 5,
        historyStatusId: 1
      },
      {
        id: 10,
        invoice: "https://gelaskaca.com/pdf/invoice-000201232123123.pdf",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        rentId: 5,
        historyStatusId: 2
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
    return queryInterface.bulkDelete('histories', null, {});
  }
};