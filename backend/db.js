require("dotenv").config(); // conexão com o .env para carregar as var do ambiente
const sql = require("mssql"); // importar biblioteca do Node.js para interagir com o SQL Server

const dbConfig = {
  // pega os valores dar var do .env
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DATABASE,
  port: process.env.PORT,
  option: {
    encrypt: false, // se for usar Azure, true : false
    enableArithAbort: true, // habilita abortar em caso de erro aritmético
    driver: process.env.DB_DRIVER, // driver usado
  },
};

// FUNÇÃO PARA CONECTAR COM O DB
async function connectDB() {
  try {
    await sql.connect(dbConfig);
    console.log("Conectado ao banco de dados SQL Server!");
  } catch (error) {
    console.log("Erro ao conectar no banco: ", error);
  }
}

module.exports = { connectDB, sql };
