module.exports = (sequelize, Sequelize) => {
    const Rent = sequelize.define("rent", {
      order_num: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      rent_start: {
        type: Sequelize.DATE
      },
      rent_end: {
        type: Sequelize.DATE
      },
      state: {
        type: Sequelize.INTEGER
      }
    });
  
    return Rent;
  };