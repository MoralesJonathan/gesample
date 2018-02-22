// const db = require('../models/user');
const create = require('../scripts/create');

module.exports = {
  createUser: function(req, res) {
    if(create(req, res)){
		res.send("OK").status(200)
	} else {
		res.send("Error").status(500)
	}
  }
}
