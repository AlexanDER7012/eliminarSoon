
module.exports = (sequelize, Sequelize) => {


    const Trabajo = sequelize.define("trabajos", {
        id_trabajo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        id_persona: {
            type: Sequelize.INTEGER,
            allowNull: false,
             references: {
            model: 'personas', 
             key: 'id_persona'
        },        
        },
        nombre: {
            type: Sequelize.STRING
        },
        fecha_inicio: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW 
        },
        fecha_fin: {
            type: Sequelize.DATE,
        },

        estado: {
            type: Sequelize.BOOLEAN,
          
        },
      
    });
    return Trabajo;
};