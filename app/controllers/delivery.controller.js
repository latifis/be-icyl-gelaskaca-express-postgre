const db = require("../models");
const Delivery = db.delivery;
const Op = db.Sequelize.Op;

// Create and Save a new Rent
exports.create = (req, res) => {
  
    // // Validate request
    // if (!req.body.name) {
    //     res.status(400).send({
    //     message: "Content can not be empty!"
    //     });
    //     return;
    // }
    
    // Create a Delivery
    const delivery = {
        addr_office: req.body.addr_office,
        fare: req.body.fare,
        userId: req.body.userId,
        paymentId: req.body.paymentId
    };

    // Save Delivery in the database
    Delivery.create(delivery)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Delivery."
            });
        });
};

// Retrieve all Delivery from the database.
exports.findAll = (req, res) => {
   
    Delivery.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving deliverys."
        });
      });
};

// Find a single Deliverys with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Delivery.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Delivery with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Delivery with id=" + id
        });
      });
};

// Update a Delivery by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Delivery.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Delivery was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Delivery with id=${id}. Maybe Delivery was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Rent with id=" + id
        });
      });
};

// Delete a Delivery with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Delivery.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Delivery was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Delivery with id=${id}. Maybe Delivery was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Delivery with id=" + id
        });
      });
};