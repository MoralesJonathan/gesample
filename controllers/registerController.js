// const db = require('../models');
const create = require('../scripts/create');

module.exports = {
  createUser: function(req, res) {
    return create(req,res);
  }
}
