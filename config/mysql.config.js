const mysql = require("mysql2");

require("dotenv").config();

const connexion = mysql.createConnection({
  host: process.env.DB_SERVER, // eslint-disable-line
  port: process.env.DB_PORT, // eslint-disable-line
  user: process.env.DB_USER, // eslint-disable-line
  password: process.env.DB_PASSWORD, // eslint-disable-line
  database: process.env.DB_DATABASE, // eslint-disable-line
});

connexion.connect((err) => {
  if (err) {
    console.log("Erreur lors de la connexion à MySQL", err.stack);
    return;
  }
  console.log(
    "Connexion à MySQL réussi, numéro de connexion : ",
    connexion.threadId
  );
});

module.exports = connexion;
