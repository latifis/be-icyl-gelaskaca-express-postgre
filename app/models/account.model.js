module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define("account", {
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Account;
  };