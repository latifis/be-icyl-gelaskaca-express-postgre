module.exports = (sequelize, Sequelize) => {
    const ProductGallery = sequelize.define("productGallery", {
      filename: {
        type: Sequelize.STRING
      },
      path: {
        type: Sequelize.STRING
      },
      is_default: {
        type: Sequelize.INTEGER
      }
    });
  
    return ProductGallery;
  };