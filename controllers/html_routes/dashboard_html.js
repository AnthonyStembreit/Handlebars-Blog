const express = require('express');
const router = express.Router();
const db = require('../../models');
const passport = require('../../config/passport');

router.get("/", ()=>{
//view all post logged in
})

router.get("/:userid", ()=>{
//view my post
})

router.get("/:postid", ()=>{
//view single post logged in
})

