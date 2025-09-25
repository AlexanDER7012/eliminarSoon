const db = require("../models");
const Trabajo = db.trabajos;  
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const trabajo = {
        nombre: req.body.nombre,
        id_persona: req.body.id_persona,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin,
        estado: req.body.estado
        
    };

    Trabajo.create(trabajo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating Trabajo."
            });
        });
};


exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Trabajo.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Trabajo."
            });
        });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Trabajo.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Trabajo with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Trabajo.update(req.body, {
        where: { id_trabajo: id }
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
                message: "Error updating Trabajo with id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    
    Trabajo.destroy({
        where: { id_trabajo: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Persona was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Trabajo with id=${id}. El cliente no fue encontado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};


