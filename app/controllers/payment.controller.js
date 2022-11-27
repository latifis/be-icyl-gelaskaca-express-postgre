const db = require("../models");
const Payment = db.payment;
const Op = db.Sequelize.Op;

// Create and Save a new Payment
exports.create = (req, res) => {
  
    // // Validate request
    // if (!req.body.name) {
    //     res.status(400).send({
    //     message: "Content can not be empty!"
    //     });
    //     return;
    // }
    
    // Create a Payment
    const payment = {
        method: req.body.method,
        total_product: req.body.total_product,
        total_all: req.body.total_all,
        userId: req.body.userId,
        verificationId: req.body.verificationId
    };

    // Save Payment in the database
    Payment.create(payment)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Payment."
            });
        });
};

// Retrieve all Payment from the database.
exports.findAll = (req, res) => {
   
    Payment.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving payments."
        });
      });
};

// Find a single Payments with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Payment.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Payment with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Payment with id=" + id
        });
      });
};

// Update a Payment by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Payment.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Payment was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Payment with id=${id}. Maybe Rent was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Payment with id=" + id
        });
      });
};

// Delete a Payment with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Payment.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Payment was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Payment with id=${id}. Maybe Payment was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Payment with id=" + id
        });
      });
};