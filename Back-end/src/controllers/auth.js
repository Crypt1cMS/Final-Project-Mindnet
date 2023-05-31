const {response} = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');


const login = async(req, res = response)=>{
        
    const {email, password} = req.body;
        
    //email existe
        const usuario = await Usuario.findOne({email});
        if(!usuario){
            return res.status(400).json({
                mensaje:"el correo es incorrecto"
            })
        }

    //validar contraseña
        const validPassword = bcrypt.compareSync(password, usuario.password);
        if(!validPassword){
            return res.status(400).json({
                mensaje:"la contraseña es incorrecta"
            })
        } 

        res.json({
            message:'hola todo bien'
        })
}

module.exports = {
    login
}