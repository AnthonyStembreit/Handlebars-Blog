const express = require('express');
var session = require("express-session");
var passport = require("./config/passport");
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection/connection');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(require('./controllers'));

app.listen(PORT, () => {
  sequelize.sync({ force: false }).then(() => {
    console.log(`App listening on port ${PORT}!`);
  })
});
