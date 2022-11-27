const { authJwt } = require("../middleware");
const payments = require("../controllers/payment.controller.js");

module.exports = app => {
  
    var router = require("express").Router();
    
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Create a new Payment
    router.post("/", payments.create);
  
    // Retrieve all Payments
    router.get("/", payments.findAll);
  
    // Retrieve a single Payments with id
    router.get("/:id", payments.findOne);
  
    // Update a Payment with id
    router.put("/:id", payments.update);
  
    // Delete a Payment with id
    router.delete("/:id", payments.delete);
  
    app.use('/api/payments', router);
    // [authJwt.verifyToken, authJwt.isPic],

  };