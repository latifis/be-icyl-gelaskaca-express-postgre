module.exports = (sequelize, Sequelize) => {
    const PaymentProof = sequelize.define("paymentProof", {
      name: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      bank: {
        type: Sequelize.DATE
      },
      nominals: {
        type: Sequelize.INTEGER
      }
    });
  
    return PaymentProof;
  };