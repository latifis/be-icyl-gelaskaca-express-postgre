module.exports = (sequelize, Sequelize) => {
    const Cart = sequelize.define("cart", {
      qty: {
        type: Sequelize.INTEGER
      }
    });
  
    return Cart;
  };