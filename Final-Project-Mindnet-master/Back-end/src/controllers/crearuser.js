const {response} = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');


const crearUsuario = async (req,res ) => {


    const {name, lastname, email, password, birthday} = req.body;
    const usuario = new Usuario({name, lastname, email, password, birthday}); 
   

    //verificar si correo existe
    const emailexiste = await Usuario.findOne({email});
    if(emailexiste)
    {
        return res.status(400).json({
            mensaje:'este correo ya existe'
        })
    }

   //encriptar contradeña
   const salt = bcrypt.genSaltSync();
   usuario.password = await bcrypt.hash(password, salt);
    
   //guardar en bd
     await usuario.save();
    res.send(
    "el:usuario fue creado con exito" 
    );
  
}

module.exports = {
    crearUsuario
}