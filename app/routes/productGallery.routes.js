const { authJwt } = require("../middleware");
const productGalleries = require("../controllers/productGallery.controller.js");

module.exports = app => {
  
    var router = require("express").Router();
    
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Create a new ProductGalleries
    router.post("/", productGalleries.create);
  
    // Retrieve all ProductGalleries
    router.get("/", productGalleries.findAll);
  
    // Retrieve a single ProductGalleries with id
    router.get("/:id", productGalleries.findOne);
  
    // Update a ProductGalleries with id
    router.put("/:id", productGalleries.update);
  
    // Delete a ProductGalleries with id
    router.delete("/:id", productGalleries.delete);
  
    app.use('/api/productGalleries', router);
    // [authJwt.verifyToken, authJwt.isPic],

  };