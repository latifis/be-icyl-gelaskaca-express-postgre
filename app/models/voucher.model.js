module.exports = (sequelize, Sequelize) => {
    const Voucher = sequelize.define("voucher", {
      name: {
        type: Sequelize.STRING
      },
      discount: {
        type: Sequelize.INTEGER
      }
    });
  
    return Voucher;
  };