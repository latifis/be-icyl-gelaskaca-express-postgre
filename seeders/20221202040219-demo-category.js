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
    return queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: "Basic",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Impulse",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "Emergency",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: "Tools",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: "Industrial",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: "Speciality",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: "Unsought",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: "Regularly",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: "Homogenous",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: "Heterogenous",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        name: "Convenience",
        createdAt: new Date(),
        updatedAt: new Date()
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
    return queryInterface.bulkDelete('categories', null, {});
  }
};