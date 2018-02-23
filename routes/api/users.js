const router = require('express').Router();
const usersController = require("../../controllers/usersController");

router.get('/allUsers', usersController.getAllUsers);
router.get('/user/:id', usersController.getOneUser);

module.exports = router;