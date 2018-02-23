const logout = require('../scripts/logout');

module.exports = {
  logOut: function(req, res) {
    logout(req, res, result => {
      res.redirect('/')
    })
  }
};