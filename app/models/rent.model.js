module.exports = (sequelize, Sequelize) => {
    const Rent = sequelize.define("rent", {
      address: {
        type: Sequelize.STRING
      },
      rent_date: {
        type: Sequelize.DATE
      },
      rent_end: {
        type: Sequelize.DATE
      }
    });
  
    return Rent;
  };