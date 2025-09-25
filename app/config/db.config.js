module.exports = {
  HOST: "ep-still-bush-adlekc6m-pooler.c-2.us-east-1.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_YEQAsNn9VL7J",
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};