const express = require('express');
const router = express.Router();
const db = require('../../models');
const passport = require('../../config/passport');


router.get("/", ()=>{
//view all posts 
})

router.get("/:postid",()=>{
//view one post
})

//trying to get modal to work but set up these in case
// router.get("/login", ()=>{
// //view login
// })

// router.get("/signup", ()=>{
// //view signup
// })


