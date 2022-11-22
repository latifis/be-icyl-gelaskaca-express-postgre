module.exports = (sequelize, Sequelize) => {
    const Payment = sequelize.define("payment", {
      method: {
        type: Sequelize.STRING
      },
      total_product: {
        type: Sequelize.INTEGER
      },
      total_all: {
        type: Sequelize.INTEGER
      }
    });
  
    return Payment;
  };