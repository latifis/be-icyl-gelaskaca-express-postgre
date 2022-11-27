const db = require("../models");
const Stock = db.stock;
const Op = db.Sequelize.Op;

// Create and Save a new Stock
exports.create = (req, res) => {
  
    // // Validate request
    // if (!req.body.name) {
    //     res.status(400).send({
    //     message: "Content can not be empty!"
    //     });
    //     return;
    // }
    
    // Create a Stock
    const stock = {
        code: req.body.code,
        name: req.body.name,
        qty: req.body.qty,
        productId: req.body.productId
    };

    // Save Stock in the database
    Stock.create(stock)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Stock."
            });
        });
};

// Retrieve all Stock from the database.
exports.findAll = (req, res) => {
   
    Stock.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving stocks."
        });
      });
};

// Find a single Stocks with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Stock.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Stock with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Stock with id=" + id
        });
      });
};

// Update a Stock by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Stock.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Stock was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Stock with id=${id}. Maybe Stock was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Stock with id=" + id
        });
      });
};

// Delete a Stock with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Stock.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Stock was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Stock with id=${id}. Maybe Stock was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Stock with id=" + id
        });
      });
};