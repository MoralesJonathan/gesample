const models = require('../models/user')
const mongoose = require('mongoose');
const keys = require('../keys.json')

var get = function(req, res, user, next) {
  let userSession = req.session;
  mongoose.connect(keys.mongoUrl + 'gesample', (mongooseErr, sucess) => {
    if (mongooseErr) {
      console.error(`Could not connect to mongoose error: ${mongooseErr}`)
      next(false)
    } else {
      if (user === '*') {
        let arrayOfUsers = []
        models.find({}, (err, users) => {
          if (err || !users) {
            next(false) //Find failed strange error or no users
          } else {
            users.forEach(function(user) {
              arrayOfUsers.push(user);
            });
            mongoose.disconnect();
            next(arrayOfUsers);
          }
        });
      } else if (user === 'self') {
        models.findOne({
          'username': userSession.user
        }, (err, user) => {
          if (err) {
            next(false) //Find failed strange error 
          } else {
            mongoose.disconnect();
            next(user);
          }
        });
      } else {
        user = user.replace("%40", "@");
        models.findOne({
          'username': user
        }, (err, user) => {
          if (err || !user) {
            mongoose.disconnect();
            next(false) //Find failed strange error or user does not exist	
          } else {
            mongoose.disconnect();
            next(user);
          }
        });
      }
    }
  });
}

module.exports = get;