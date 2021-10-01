const express = require('express');
const router = express.Router();
const Comment = require('../../models/Comment');
const passport = require('../../config/passport');
//creates a new comment
router.post("/", async (req, res) =>{
    try {
        let newComment = await Comment.Create(req.body);
        res.json(newComment)
    } catch (error) {
        console.log(error)
    }
})

//gets all comments associated with a post
router.get("/:postid",  async (req, res)=>{
    try {
        let postComments = await Comment.findAll({
            where: {
                postId: req.params.postid
            }
        });
        res.json(postComments)
    } catch (error) {
        console.log(error)
    }
})

//updates a comment
router.put("/:id",  async (req, res)=>{
    try{
        let updatedComment = await Comment.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json(updatedComment)
    }catch(error){
        console.log(error)
    }
})

//deletes a comment
router.delete("/:id",  async (req, res)=>{
    try{
        Comment.destroy({
            where:{
                id: req.params.id
            }
        })
        res.json("comment successfully deleted")
    }catch(error){
        console.log(error)
    }
})

module.exports = router