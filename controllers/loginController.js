const db = require('../models/user');
const auth = require('../scripts/auth');

module.exports = {
  authenticate: function(req, res) {
    return auth();
  }
}
