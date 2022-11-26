const { authJwt } = require("../middleware");
const products = require("../controllers/product.controller.js");

module.exports = app => {
  
    var router = require("express").Router();
    
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Create a new Product
    router.post("/", products.create);
  
    // Retrieve all Products
    router.get("/", products.findAll);
  
    // // Retrieve all published Products
    // // router.get("/published", events.findAllPublished);
  
    // Retrieve a single Product with id
    router.get("/:id", products.findOne);
  
    // Update a Product with id
    router.put("/:id", products.update);
  
    // Delete a Product with id
    router.delete("/:id", products.delete);
  
    // // Create a new Product
    // router.delete("/", events.deleteAll);
  
    app.use('/api/products', router);
    // [authJwt.verifyToken, authJwt.isPic],

  };