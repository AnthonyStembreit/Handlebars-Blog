const router = require('express').Router();
const main = require("./main-html");
const dashboard = require("./dashboard-html");

router.use("/main", main);
router.use("/dashboard", dashboard);

module.exports = router


