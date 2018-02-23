const auth = require('../scripts/auth');

module.exports = {
  authenticate: function (req, res) {
    auth(req, res, result => {
      if (result) {
        res.redirect('/')
      } else {
        res.status(500).send("BAD");
      }
    })
  }
};