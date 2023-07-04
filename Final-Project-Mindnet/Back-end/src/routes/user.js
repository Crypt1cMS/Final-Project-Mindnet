const express = require('express');
const Usuario = require("../models/usuario");
const {check} = require('express-validator');
const validarCampos = require('../../middlewares/validar-campos');
const { crearUsuario } = require('../controllers/crearuser');

const router  = express.Router();

//crear usuario
router.post('/users', check('email','esto no es un correo valido').isEmail()
, validarCampos, crearUsuario
);

//obtener todos los usuario
router.get('/users',(req,res)=>{
    Usuario
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))

});

//obtener un usuario especifco
router.get('/users/:email',(req, res)=>{
    const {email} =req.params;
    // res.json(name);
    Usuario
    .findOne({email})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))

})

//actualizar un usuario
router.put('/users/:id',(req, res)=>{
    const {id } =req.params;
    const{name,lastname , email, password, birthday} = req.body;
    Usuario
    .updateOne({ _id: id }, { $set:{ name,lastname , email, password, birthday } })
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))

})

//eliminar un usuario
router.delete('/users/:id',(req, res)=>{
    const {id } =req.params;
    Usuario
    .findOneAndRemove({ _id: id })
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))

})

// seguir un usuario
router.put("/users/:id/follow", async(req, res)=>{
    if(req.body.userid !== req.params.id){
        const userid = req.body.userid;
        const user = await Usuario.findById(req.params.id);
        const currentUseruser = await Usuario.findById(userid);
        if(!user.followers.includes(userid)){
            await user.updateOne({$push: {followers: userid}});
            await currentUseruser.updateOne({$push: {followings: req.params.id}});
            res.status(200).json("user has been followed");
        }
        else{
            res.status(403).json("you allready following this user")
        }
    }
    else{
        res.status(403).json("you cant follow yourself");
    }
})

//dejar de seguir usuario
router.put("/users/:id/unfollow", async(req, res)=>{
    if(req.body.userid !== req.params.id){
        const userid = req.body.userid;
        const user = await Usuario.findById(req.params.id);
        const currentUseruser = await Usuario.findById(userid);
        if(user.followers.includes(userid)){
            await user.updateOne({$pull: {followers: userid}});
            await currentUseruser.updateOne({$pull: {followings: req.params.id}});
            res.status(200).json("user has been unfollowed");
        }
        else{
            res.status(403).json("you are not following this user")
        }
    }
    else{
        res.status(403).json("you cant unfollow yourself");
    }
})

module.exports = router;