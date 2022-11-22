module.exports = (sequelize, Sequelize) => {
    const Rolee = sequelize.define("rolee", {
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Rolee;
  };