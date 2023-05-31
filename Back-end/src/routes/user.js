const express = require('express');
const Usuario = require("../models/usuario");
const {check} = require('express-validator');
const validarCampos = require('../../middlewares/validar-campos');
const { crearUsuario } = require('../controllers/crearuser');

const router  = express.Router();

//crear usuario
router.post('/users',check('email','esto no es un correo valido').isEmail()
, validarCampos, crearUsuario
);

//obtener todos los usuario
router.get('/users',(req,res)=>{
    usuarioSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))

});

//obtener un usuario especifco
router.get('/users/:email',(req, res)=>{
    const {email} =req.params;
    usuarioSchema
    .findOne(email)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))

})

//actualizar un usuario
router.put('/users/:id',(req, res)=>{
    const {id } =req.params;
    const{name,lastname , email, password, birthday} = req.body;
    usuarioSchema
    .updateOne({ _id: id }, { $set:{ name,lastname , email, password, birthday } })
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))

})

//eliminar un usuario
router.delete('/users/:id',(req, res)=>{
    const {id } =req.params;
    usuarioSchema
    .findOneAndRemove({ _id: id })
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))

})

module.exports = router;