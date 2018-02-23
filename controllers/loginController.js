const auth = require('../scripts/auth');

module.exports = {
  authenticate: function (req, res) {
    auth(req, res, result => {
      if (result) {
        res.redirect(`/?email=${result.email}&name=${result.firstname}%20${result.lastname}&age=${result.age}&lang=${result.language}`);
      } else {
        res.status(500).send("BAD");
      }
    })
  }
};
