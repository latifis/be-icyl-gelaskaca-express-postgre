const db = require("../models");
const Voucher = db.voucher;
const Op = db.Sequelize.Op;

// Create and Save a new Voucher
exports.create = (req, res) => {
  
    // // Validate request
    // if (!req.body.name) {
    //     res.status(400).send({
    //     message: "Content can not be empty!"
    //     });
    //     return;
    // }
    
    // Create a Voucher
    const voucher = {
        name: req.body.name,
        discount: req.body.discount,
        userId: req.body.userId,
        paymentId: req.body.paymentId,
    };

    // Save Voucher in the database
    Voucher.create(voucher)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Voucher."
            });
        });
};

// Retrieve all Voucher from the database.
exports.findAll = (req, res) => {
   
    Voucher.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving vouchers."
        });
      });
};

// Find a single Vouchers with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Voucher.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Voucher with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Voucher with id=" + id
        });
      });
};

// Update a Voucher by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Voucher.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Voucher was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Voucher with id=${id}. Maybe Voucher was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Voucher with id=" + id
        });
      });
};

// Delete a Voucher with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Voucher.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Voucher was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Voucher with id=${id}. Maybe Voucher was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Voucher with id=" + id
        });
      });
};