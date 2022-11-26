const { authJwt } = require("../middleware");
const carts = require("../controllers/cart.controller.js");

module.exports = app => {
  
    var router = require("express").Router();
    
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Create a new Cart
    router.post("/", carts.create);
  
    // Retrieve all Carts
    router.get("/", carts.findAll);
  
    // Retrieve a single Carts with id
    router.get("/:id", carts.findOne);
  
    // Update a Cart with id
    router.put("/:id", carts.update);
  
    // Delete a Cart with id
    router.delete("/:id", carts.delete);
  
    app.use('/api/carts', router);
    // [authJwt.verifyToken, authJwt.isPic],

  };