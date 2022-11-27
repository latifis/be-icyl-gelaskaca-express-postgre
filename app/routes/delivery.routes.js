const { authJwt } = require("../middleware");
const deliverys = require("../controllers/delivery.controller.js");

module.exports = app => {
  
    var router = require("express").Router();
    
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Create a new Delivery
    router.post("/", deliverys.create);
  
    // Retrieve all Deliverys
    router.get("/", deliverys.findAll);
  
    // Retrieve a single Deliverys with id
    router.get("/:id", deliverys.findOne);
  
    // Update a Delivery with id
    router.put("/:id", deliverys.update);
  
    // Delete a Delivery with id
    router.delete("/:id", deliverys.delete);
  
    app.use('/api/deliverys', router);
    // [authJwt.verifyToken, authJwt.isPic],

  };