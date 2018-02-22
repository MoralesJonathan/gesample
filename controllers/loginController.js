
const auth = require('../scripts/auth');

module.exports = {
  authenticate: function (req, res) {
    auth(req, res, result => {
      console.log("this is the res:" + result);
      if (result) {
        res.status(200).send("OK");
      } else {
        res.status(500).send("BAD");
      }
    })
  }
};