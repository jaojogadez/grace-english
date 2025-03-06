const express = require("express"); // importa o framework express
const bodyParser = require("body-parser"); // importa o middleware body-parser, processa o corpo das requisições HTTP
const cors = require("cors"); // importa o middleware cors, permite aceitar requisições de origen diferentes
const { connectDB, sql  } = require("./db"); // importa as funções do db.js

const app = express(); // cria uma instância do express para configurar o servidor
app.use(cors()); // inicia o cors
app.use(bodyParser.json()); // inicia o body parser

connectDB();

app.post("/cadastro", async (req, res) => {
    const {} = req.body
})

