const models = require('../models/user')
const mongoose = require('mongoose');
const keys = require('../keys.json')

var update = function(req, res, user, next) {
  let userSession = req.session;
  mongoose.connect(keys.mongoUrl + 'gesample', (mongooseErr, sucess) => {
    if (mongooseErr) {
      console.error(`Could not connect to mongoose error: ${mongooseErr}`)
      next(false)
    } else {
       if (user === 'self') {
         let keyToUpdate = req.body.key
         let value = req.body.newValue 
        models.update({
          'username': userSession.user 
        }, { 
          $set: {
            [keyToUpdate] : value
          }
        }, (err, sucess) => {
          if (err || sucess.ok < 1) {
            next(false) //Find failed strange error 
          } else {
            if(keyToUpdate == 'username' || keyToUpdate == 'firstName' ||keyToUpdate == 'lastName' ) userSession[keyToUpdate.toLowerCase()] = value;
            mongoose.disconnect();
            next(true);
          }
        });
      } else {
        user = user.replace("%40", "@");
        let keyToUpdate = req.body.key
        let value = req.body.newValue 
       models.update({
         'username': user
       }, { 
         $set: {
           [keyToUpdate] : value
         }
       }, (err, sucess) => {
         console.log(sucess)
         if (err) {
           next(false) //Find failed strange error 
         } else {
           mongoose.disconnect();
           next(true);
         }
       });
      }
    }
  });
}

module.exports = update;