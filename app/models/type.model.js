module.exports = (sequelize, Sequelize) => {
    const Type = sequelize.define("type", {
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Type;
  };