const bcrypt = require("bcrypt");
const models = require('../models/user')
const mongoose = require('mongoose');
const keys = require('../keys.json')

var auth = function (req, res, next) {
	let userSession = req.session;
	mongoose.connect(keys.mongoUrl + "gesample", (mongooseErr, sucess) => {
		if (mongooseErr) {
			console.error(`Could not connect to mongoose error: ${mongooseErr}`)
			next(false)
		}
		else {
			models.findOne({ 'username': req.body.username.toLowerCase().trim() }, function (err, user) {
				if (err) {
					next(false) //Login failed strange error 
				};
				if (user !== null) {
					if (bcrypt.compareSync(req.body.password, user.password)) {
						userSession.username = user.username;
						userSession.firstname = user.firstName
						userSession.lastname = user.lastName
						mongoose.disconnect();
						next(true);
					}
					else {
						next(false) //Login failed! Bad Password
					};
				} else {
					next(false) //Login failed! Bad Username
				}
			});
		}
	});
}



module.exports = auth;