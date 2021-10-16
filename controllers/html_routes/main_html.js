const express = require('express');
const router = express.Router();
const db = require('../../models');

router.get("/", async (req, res) =>{
//view all posts 
let posts = await db.Post.findAll()
console.log(posts)
res.render("all-posts", {posts: posts, dashboard: false})
})

router.get("/:postid", async(req, res)=>{
//view one post
let post = await db.Post.findOne({
    where:{
        id: req.params.id
    }
})
console.log(post)
res.render("single-post", {post})
})

//trying to get modal to work but set up these in case
// router.get("/login", ()=>{
// //view login
// })

// router.get("/signup", ()=>{
// //view signup
// })


