const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 9000;

//Inicializamos express y podemos acceder a todas sus funcionalidades
const app = express(); //Creamos una instancia de la app express que nos servira para definir las rutas, middlewares, escuchar el servidor, etc
app.use(express.json()); //Cuando llegue una solicitud con datos en formato JSON, para que lo entienda automaticamente. Sin esto los datos que nos lleguen del POST desde el frontend, no sabe leer el req.body
app.use(cors()); //Sirve para aceptar peticiones desde cualquier dominio

//CONEXION CON MONGO
require("dotenv").config() //Nos permite obtener la informacion del archivo .env
const url_mongo = process.env.DATABASE_URL_DEV;
mongoose.connect(url_mongo);

const db = mongoose.connection;

db.on("error", (error) => {
    console.log(`Error al conectar con mongo ${error}`)
});
db.on("connected", () => {
    console.log(`Success connect`)
});
db.on("disconnected", () => {
    console.log(`Mongo is disconnected`)
});

//RUTAS

//ESCUCHA DEL PUERTO
app.listen(port, () => {
    console.log(`APP listening on port ${port}`)
});
