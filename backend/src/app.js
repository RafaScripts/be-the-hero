const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());


/** 
 * rota / recurso
 */

/*
* Metodos http:
GET: puxa Buscar/Listar uma informação do back-end
POST: cria uma informação no back-end
PUT: altera uma informação no back-end
DELETE: deleta uma informação no back-end
*/

/**
 * Query Params: parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: parâmetros utilizados para indentificar recursos 
 * Request Body: corpo de requisição utilizado para criar ou alterar recursos
 */

/**
 * SQL * MySQL * SQLite * PostegreSQL * Oracle * Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB tals tals tals
 */



module.exports = app;
