const router = require('express').Router();
const usersController = require("../../controllers/usersController");

router.get('/allUsers', usersController.getAllUsers);
router.get('/user/:id', usersController.getOneUser);
router.post('/update/:id', usersController.updateUserInfo);

module.exports = router;