const db = require("../models");
const Verification = db.verification;
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
    
    // Create a Verification
    const verification = {
        status: req.body.status
    };

    // Save Verification in the database
    Verification.create(verification)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Verification."
            });
        });
};

// Retrieve all Verification from the database.
exports.findAll = (req, res) => {
   
    Verification.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving verifications."
        });
      });
};

// Find a single Verifications with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Verification.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Verification with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Verification with id=" + id
        });
      });
};

// Update a Verification by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Verification.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Verification was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Verification with id=${id}. Maybe Verification was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Verification with id=" + id
        });
      });
};

// Delete a Verification with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Verification.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Verification was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Verification with id=${id}. Maybe Verification was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Verification with id=" + id
        });
      });
};