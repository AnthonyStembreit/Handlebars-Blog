const router = require('express').Router();
const main = require("./main_html");
const dashboard = require("./dashboard_html");

router.use("/main", main);
router.use("/dashboard", dashboard);

module.exports = router


