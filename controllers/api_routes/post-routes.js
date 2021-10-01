const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');
const passport = require('../../config/passport');

//creates a new post
router.post("/",  async (req, res) =>{
    try {
        let newPost = await Post.Create(req.body);
        res.json(newPost)
    } catch (error) {
        console.log(error)
    }
})

//gets all posts associated with a user
router.get("/:userid", async (req, res)=>{
    try {
        let usersPost = await Post.findAll({
            where: {
                userId: req.params.userid
            }
        });
        res.json(usersPost)
    } catch (error) {
        console.log(error)
    }
})

//updates a post
router.put("/:id", async (req, res)=>{
    try{
        let updatedPost = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json(updatedPost)
    }catch(error){
        console.log(error)
    }
})

//deletes a post
router.delete("/:id",  async (req, res)=>{
    try{
        Post.destroy({
            where:{
                id: req.params.id
            }
        })
        res.json("post successfully deleted")
    }catch(error){
        console.log(error)
    }
})
module.exports = router