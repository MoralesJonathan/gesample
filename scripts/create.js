const bcrypt = require("bcrypt");
const saltRounds = 10;
const models = require('../models/user')
const mongoose = require('mongoose');
const keys = require('../keys.json')

var create = function(req, res, next) {
	bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      if (!err) {
		 	mongoose.connect(keys.mongoUrl+"gesample", (mongooseErr, sucess) => {
				if(mongooseErr){
					console.error(`Could not connect to mongoose error: ${mongooseErr}`)
					next(false)
				} else {
				
				let user = new models({
 				 firstName: req.body.firstname.toLowerCase(),
 				 lastName: req.body.lastname.toLowerCase(),
 				 username: req.body.username.toLowerCase().trim(),
 				 password: hash
 			 })
 			 user.save((error, sucess) => {
 				 if(error) {
 					 console.error(`Could not create user error: ${error}`)
 					 next(false)
 				 } else {
					 console.log('user saved.')
 					 next(true)
 				 }
 			 })
		 }
		 })
      }
      else {
				console.error(`Could not hash password error: ${err}`)
				next(false)
			}
    });
}

module.exports = create;