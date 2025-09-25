
const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions:{
     ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,

   
  }
});

const db = {};

db.Sequelize = Sequelize;

db.sequelize = sequelize;

const Persona =require("./persona.model.js")(sequelize,Sequelize);
const Trabajo=require("./trabajo.model.js")(sequelize,Sequelize); ;



db.personas = Persona;
db.trabajos =Trabajo;


Persona.hasMany(Trabajo,{foreignKey:"id_persona"});
Trabajo.belongsTo(Persona,{foreignKey:"id_persona"});

module.exports = db;