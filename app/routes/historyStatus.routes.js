const { authJwt } = require("../middleware");
const historyStatuss = require("../controllers/historyStatus.controller.js");

module.exports = app => {
  
    var router = require("express").Router();
    
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Create a new HistoryStatus
    router.post("/", historyStatuss.create);
  
    // Retrieve all HistoryStatus
    router.get("/", historyStatuss.findAll);
  
    // Retrieve a single HistoryStatuss with id
    router.get("/:id", historyStatuss.findOne);
  
    // Update a HistoryStatus with id
    router.put("/:id", historyStatuss.update);
  
    // Delete a HistoryStatus with id
    router.delete("/:id", historyStatuss.delete);
  
    app.use('/api/historyStatuss', router);
    // [authJwt.verifyToken, authJwt.isPic],

  };