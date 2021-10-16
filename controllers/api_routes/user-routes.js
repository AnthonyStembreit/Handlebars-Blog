const express = require('express');
const router = express.Router();
const db = require('../../models');
const User = db.User
const passport = require('../../config/passport');

//creates a new user
router.post("/", passport.authenticate('local'), async (req, res) => {
    try {
        let newUser = await User.findOrCreate({
            where: { email: req.body.email },
            defaults: req.body
        });
        res.json(newUser)
    } catch (error) {
        console.log(error)
    }
})

//logs in a user
router.post("/login", passport.authenticate('local'), async (req, res) => {
    try {
        let user = User.findOne({
            where: {
                username: req.body.username,
            },
        });
        res.json(user);
    } catch (error) {
        console.log(error)
    }
})
//logs out a user 
router.get("/logout", function (req, res) {
    req.logout();

    //may have to change this redirect
    res.redirect("/");
});
//gets all users
router.get("/", async (req, res) => {
    try{
        let allUsers = User.findAll()
        res.json(allUsers)
    }catch(error){
        console.log(error)
    }
})

//updates a user
router.put("/:id", async (req, res) => {
    try{
        let updatedUser = User.update(req.body, {
            where:{ 
                id: req.params.id
            }
        });
        res.json(updatedUser)
    }catch(error){
        console.log(error)
    }

})

//deletes a user
router.delete("/:id", async (req, res) => {
    try{
        User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json("successfully deleted")
    }catch(error){
        console.log(error)
    }

})
module.exports = router