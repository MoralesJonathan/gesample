// const db = require('../models/user');
const create = require('../scripts/create');

module.exports = {
  createUser: function(req, res) {
    create(req, res, result => {
      if(result){
  		res.status(200).send("OK")
  	} else {
  		res.status(500).send("Error")
  	}
    })
  }
}
