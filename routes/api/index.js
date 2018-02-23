const router = require("express").Router();
const loginRoutes = require('./login');
const registerRoutes = require('./register');
const logoutRoute = require('./logout')

router.use("/login", loginRoutes);
router.use("/register", registerRoutes);
router.use("/logout", logoutRoute);

module.exports = router;