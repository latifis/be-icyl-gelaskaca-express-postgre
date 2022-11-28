const { authJwt } = require("../middleware");
const vouchers = require("../controllers/voucher.controller.js");

module.exports = app => {
  
    var router = require("express").Router();
    
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Create a new Voucher
    router.post("/", vouchers.create);
  
    // Retrieve all Vouchers
    router.get("/", vouchers.findAll);
  
    // Retrieve a single Vouchers with id
    router.get("/:id", vouchers.findOne);
  
    // Update a Voucher with id
    router.put("/:id", vouchers.update);
  
    // Delete a Voucher with id
    router.delete("/:id", vouchers.delete);
  
    app.use('/api/vouchers', router);
    // [authJwt.verifyToken, authJwt.isPic],

  };