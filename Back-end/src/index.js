const express = require('express');
const mongoose = require('mongoose');
const app =  express();
const rutaUsuario = require("./routes/user");


const port =(9000);
const password = 'mongo2804';
const username = 'gustavo2804';

//routes
app.get("/",(req,res)=>{
    res.send("bienvenido a mi servidor");

})

// middlerware
app.use(express.json())
app.use('/api', rutaUsuario);


//mongoose connection
mongoose.connect(`mongodb+srv://${username}:${password}@empresa.0iulaeb.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>console.log("conectado a base de datos atlas"))
.catch((error)=> console.error(error));




app.listen(port,()=>{console.log("servidor iniciado en el puerto:",port)})