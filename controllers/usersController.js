const get = require('../scripts/getUsers');
const update = require('../scripts/updateUser');

module.exports = {
  getAllUsers: function(req, res) {
    get(req, res, '*', result => {
      if(result){
  		res.status(200).send(result)
  	} else {
  		res.sendStatus(500)
  	}
    })
  },
  getOneUser: function(req, res) {
    get(req, res, req.params.id, result => {
      if(result){
  		res.status(200).send(result)
  	} else {
  		res.sendStatus(404)
  	}
    })
  },
  updateUserInfo: function(req, res) {
    update(req, res, req.params.id, result => {
      if(result){
  		res.sendStatus(200)
  	} else {
  		res.sendStatus(500)
  	}
    })
  }
}