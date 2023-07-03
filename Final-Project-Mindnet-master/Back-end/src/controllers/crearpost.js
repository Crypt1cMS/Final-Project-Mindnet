const {response} = require('express');
const Post = require('../models/publicaciones');


const crearPost = async (req, res) => {
    const { caption, image } = req.body;
    const post = new Post({ caption, image }); // Corrected from 'usuario' to 'post'
    
    const postexiste = await Post.findOne({caption});
    if(postexiste)
    {
        return res.status(400).json({
            mensaje:'este post ya existe'
        })
    }

    // guardar en bd
    await post.save();
    res.send("El post fue creado con éxito");
};

module.exports = {
    crearPost
};
