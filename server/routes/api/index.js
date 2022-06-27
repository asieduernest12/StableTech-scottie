const router = require("express").Router();
const userRoutes = require("./user-routes");
const horseRoutes = require("./horse-routes")

router.use("/user", userRoutes);
router.use("/horse", horseRoutes);

module.exports = router;