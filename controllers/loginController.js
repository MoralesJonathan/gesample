const db = require('../models');
const auth = require('../scripts/auth');

module.exports = {
  authenticate: function(req, res) {
    return auth();
  }
}
