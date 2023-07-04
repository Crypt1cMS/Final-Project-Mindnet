const express = require('express');
const mongoose = require('mongoose');
const app =  express();
const cors= require('cors');
const rutaUsuario = require("./routes/user");
const rutaAuth =require('./routes/auth');
const rutaPublicaciones = require('./routes/posts');


//JSON.stringify()
const port =(9000);
const password = 'mongo2804';
const username = 'gustavo2804';



//routes
app.get("/",(req,res)=>{
    res.send("bienvenido a mi servidor");

})

// middlerware
app.use(express.json())
app.use(cors());
app.use('/api', rutaUsuario);
app.use('/api/auth',rutaAuth);
app.use('/api', rutaPublicaciones);


//mongoose connection
mongoose.connect(`mongodb+srv://${username}:${password}@empresa.0iulaeb.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>console.log("conectado a base de datos atlas"))
.catch((error)=> console.error(error));




app.listen(port,()=>{console.log("servidor iniciado en el puerto:",port)})