module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      desc: {
        type: Sequelize.STRING
      }
    });
  
    return Product;
  };
  