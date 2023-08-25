import express from "express"
import dotenv from "dotenv"
import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js"
//const express = require ("express");

const app = express ();

dotenv.config();

conectarDB();

// Routing
/*app.get('/', (req, res) => {
    res.send('Hello world')
})
*/

app.use("/api/usuarios", usuarioRoutes);


const PORT = process.env.PORT || 7777;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});