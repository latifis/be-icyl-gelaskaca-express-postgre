const db = require("../models");
const PaymentProof = db.paymentProof;
const Op = db.Sequelize.Op;

// Create and Save a new PaymentProof
exports.create = (req, res) => {
  
    // // Validate request
    // if (!req.body.name) {
    //     res.status(400).send({
    //     message: "Content can not be empty!"
    //     });
    //     return;
    // }
    
    // Create a PaymentProof
    const paymentProof = {
        name: req.body.name,
        date: req.body.date,
        bank: req.body.total_all,
        nominals: req.body.nominals,
        state: req.body.state,
        rentId:req.body.rentId,
        userId: req.body.userId,
        verificationId: req.body.verificationId
    };

    // Save Payment in the database
    PaymentProof.create(paymentProof)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the PaymentProof."
            });
        });
};

// Retrieve all PaymentProof from the database.
exports.findAll = (req, res) => {
   
    PaymentProof.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving paymentProof."
        });
      });
};

// Find a single PaymentProofs with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    PaymentProof.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find PaymentProof with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving PaymentProof with id=" + id
        });
      });
};

// Update a PaymentProof by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    PaymentProof.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "PaymentProof was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update PaymentProof with id=${id}. Maybe PaymentProof was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating PaymentProof with id=" + id
        });
      });
};

// Delete a PaymentProof with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    PaymentProof.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "PaymentProof was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete PaymentProof with id=${id}. Maybe PaymentProof was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete PaymentProof with id=" + id
        });
      });
};