const express = require('express');
const usuarioSchema = require("../models/usuario");

const router  = express.Router();

//crear usuario
router.post('/users',(req,res)=>{
    const usuario = usuarioSchema(req.body);
    usuario
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}))
});

//obtener todos los usuario
router.get('/users',(req,res)=>{
    usuarioSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))

});

//obtener un usuario especifco
router.get('/users/:id',(req, res)=>{
    const {id } =req.params;
    usuarioSchema
    .findById(id)
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