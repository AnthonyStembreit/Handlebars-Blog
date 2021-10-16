const express = require('express');
const router = express.Router();
const db = require('../../models');
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.get("/",  isAuthenticated, async (req, res)=>{
//view all post logged in
let posts = await db.Post.findAll()
res.render("all-posts", {layout:"dashboard", posts: posts, profile: false })
})

router.get("/profile",  isAuthenticated, async (req, res)=>{
//view my post
let myposts = await db.Post.findAll({
    where: {
        userId: req.user.id
    }
})

res.render("all-posts", {layout:"dashboard", posts: myposts, profile:true} )
})

router.get("/:postid", isAuthenticated, async (req, res)=>{
//view single post logged in
let post = await db.Post.findAll({
    where: {
        userId: req.params.postid
    },
       //need to add include comments and username
    include: {
        username
    }
})
res.render("single-post", {layout:"dashboard", post: post, loggedin:true})
})

module.exports = router