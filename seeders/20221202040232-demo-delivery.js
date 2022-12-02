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
    return queryInterface.bulkInsert('deliveries', [
      {
        id: 1,
        addr_office: "Sunshine Street no. 14, Tulung Agung",
        fare: 50000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        paymentd: 1
      },
      {
        id: 2,
        addr_office: "Wakanda Street no. 56",
        fare: 55000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        paymentd: 1
      },
      {
        id: 3,
        addr_office: "Rareta Street no. 23, Yogyakarta",
        fare: 230000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        paymentd: 2
      },
      {
        id: 4,
        addr_office: "Tawakal Street no. 7, Jakarta",
        fare: 550000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        paymentd: 3
      },
      {
        id: 5,
        addr_office: "Godean Street no. 117, Surakarta",
        fare: 30500,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        paymentd: 2
      },
      {
        id: 6,
        addr_office: "Jumanji Street no. 550, Pati",
        fare: 23500,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 6,
        paymentd: 4
      },
      {
        id: 7,
        addr_office: "Oakse Street no. 3, Los Angel",
        fare: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 9,
        paymentd: 6
      },
      {
        id: 8,
        addr_office: "Supratman Street no. 101, Parangkusumo",
        fare: 105000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        paymentd: 1
      },
      {
        id: 9,
        addr_office: "Nokmuri Street no. 22, Palembang",
        fare: 203500,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        paymentd: 6
      },
      {
        id: 10,
        addr_office: "Botstraap Street no. 56, Temanggung",
        fare: 6000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        paymentd: 5
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
    return queryInterface.bulkDelete('deliveries', null, {});
  }
};