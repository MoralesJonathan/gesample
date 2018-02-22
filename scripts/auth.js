const bcrypt = require("bcrypt");
const saltRounds = 10;
const models = require('../models/user')


var auth = function() {
	return true;
}

module.exports = auth;