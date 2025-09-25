
module.exports = (sequelize, Sequelize) => {


    const Persona = sequelize.define("personas", {
        id_persona: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        fecha_registro: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW 
        },
        estado: {
            type: Sequelize.BOOLEAN
        },
      
    });
    return Persona;
};