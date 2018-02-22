const bcrypt = require("bcrypt");
const saltRounds = 10;
const models = require('../models/user')


var create = function(req, res) {
	bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      if (!err) {
		 mongoose.conect(`mongodb://${keys.mongoUrl}`)
		 let user = new models({
			 firstName: toTitleCase(req.body.firstname),
			 lastName: toTitleCase(req.body.lastname),
			 username: req.body.username.toLowerCase().trim(),
			 password: hash
		 })
		 user.save((error, sucess) => {
			 if(error) {
				 console.error(`Could not create user error: ${error}`)
				 return false
			 } else {
				 return true
			 }
		 })
      }
      else console.error(`Could not hash password error: ${err}`)
    });
}

module.exports = create;