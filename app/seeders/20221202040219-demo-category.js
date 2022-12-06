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
        image: "https://gelaskaca.com/img/image-0001012321123123.img",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Impulse",
        image: "https://gelaskaca.com/img/image-0001012321123123.img",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "Emergency",
        image: "https://gelaskaca.com/img/image-0001012321123123.img",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: "Tools",
        image: "https://gelaskaca.com/img/image-0001012321123123.img",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: "Industrial",
        image: "https://gelaskaca.com/img/image-0001012321123123.img",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: "Speciality",
        image: "https://gelaskaca.com/img/image-0001012321123123.img",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: "Unsought",
        image: "https://gelaskaca.com/img/image-0001012321123123.img",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: "Regularly",
        image: "https://gelaskaca.com/img/image-0001012321123123.img",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: "Homogenous",
        image: "https://gelaskaca.com/img/image-0001012321123123.img",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: "Heterogenous",
        image: "https://gelaskaca.com/img/image-0001012321123123.img",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        name: "Convenience",
        image: "https://gelaskaca.com/img/image-0001012321123123.img",
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