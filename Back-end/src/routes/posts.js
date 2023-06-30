const express = require('express');
const Post = require('../models/post');
const Usuario = require('../models/usuario');

const router = express.Router();


//create a post
router.post("/", async (req, res)=>{

    const newpost = Post(req.body);

    try {
        

        const savepost = await newpost.save();
        res.status(200).json(`"nuevo post creado" ${savepost.userid}`);


    } catch (err) {
        res.status(500).json(err);
    }


})
//delete a post
router.delete("/:id", async (req, res) =>{

        try {
                const delpost = await Post.findById(req.params.id);

                if(delpost.userid === req.body.userid )
                {
                    await delpost.deleteOne();
                    res.status(200).json("post deleted succesfully")
                }
                else{
                    res.status(403).json("you can only delete your own post")
                }
            
        } catch (err) {
            res.status(500).json(err);
        }

})

//like a post
router.put("/:id/like", async(req, res)=>{

    try {
            const post = await Post.findById(req.params.id);

            if(!post.likes.includes(req.body.userid)){
                await post.updateOne({$push: {likes: req.body.userid}})
                res.status(200).json("the post has been liked")
            }
            else{
                await post.updateOne({$pull: {likes: req.body.userid}})
                res.status(200).json("the post has been disliked")
            }

    } catch (err) {
        res.status(500).json(err);
    }



})
//get a post
router.get("/:id", async(req, res)=>{
    try {
        
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
    
    
    } catch (err) {

        res.status(500).json(err);
    }
})
//get all post timeline
router.get("/timeline/all", async(req, res)=>{
    try {

        const currentUser = await Usuario.findById(req.body.userid);
        const userPost = await Post.find( {userid: currentUser._id});
        const friendPost = await Promise.all(
            currentUser.followings.map((friendid) =>{
                return Post.find({ userid: friendid});
            })
        );
        res.json(userPost.concat(...friendPost))
    } catch (err) {
        res.status(500).json(err);
    }


})
module.exports = router;
