const express = require('express');
const router = express.Router();
const db = require('../../models');
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.get("/",  isAuthenticated, ()=>{
//view all post logged in
})

router.get("/:userid",  isAuthenticated, ()=>{
//view my post
})

router.get("/:postid", isAuthenticated, ()=>{
//view single post logged in
})

