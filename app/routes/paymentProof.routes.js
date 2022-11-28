const { authJwt } = require("../middleware");
const paymentProofs = require("../controllers/paymentProof.controller.js");

module.exports = app => {
  
    var router = require("express").Router();
    
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Create a new PaymentProof
    router.post("/", paymentProofs.create);
  
    // Retrieve all PaymentProofs
    router.get("/", paymentProofs.findAll);
  
    // Retrieve a single PaymentProofs with id
    router.get("/:id", paymentProofs.findOne);
  
    // Update a PaymentProof with id
    router.put("/:id", paymentProofs.update);
  
    // Delete a PaymentProof with id
    router.delete("/:id", paymentProofs.delete);
  
    app.use('/api/paymentProofs', router);
    // [authJwt.verifyToken, authJwt.isPic],

  };