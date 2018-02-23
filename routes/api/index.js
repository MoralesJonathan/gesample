const router = require("express").Router();
const loginRoutes = require('./login');
const registerRoutes = require('./register');
const logoutRoute = require('./logout')
const usersRoute = require('./users')

router.use("/login", loginRoutes);
router.use("/register", registerRoutes);
router.use("/logout", logoutRoute);
router.use("/users", usersRoute);

module.exports = router;