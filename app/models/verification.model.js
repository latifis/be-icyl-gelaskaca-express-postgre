module.exports = (sequelize, Sequelize) => {
    const Verification = sequelize.define("verification", {
      status: {
        type: Sequelize.INTEGER
      }
    });
  
    return Verification;
  };