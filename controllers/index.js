const router = require('express').Router();
const apiRoutes = require("./api_routes");
const htmlRoutes = require("./html_routes")
router.use('/api', apiRoutes);
router.use("/", htmlRoutes)

module.exports = router;