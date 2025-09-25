const db = require("../models");
const Persona = db.personas;  
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const persona = {
        nombre: req.body.nombre,
        email: req.body.email,
        fecha_registro: req.body.fecha_registro,
        estado: req.body.estado
        
    };

    Persona.create(persona)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Persona."
            });
        });
};


exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Persona.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving clients."
            });
        });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Persona.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Pesona with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Persona.update(req.body, {
        where: { id_persona: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Persona was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Persona with id=${id}. Maybe Client was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Client with id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    
    Persona.destroy({
        where: { id_persona: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Persona was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Persona with id=${id}. El cliente no fue encontado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};


