const express = require('express');
const mongoose = require('mongoose');
const session= require('express-session');
const bodyParser = require('body-parser');
const handleBars = require('express-handlebars');
const app = express();
const morgan = require('morgan');
const MongoStore = require('connect-mongo')(session);
const PORT = process.env.PORT || 8080;
const routes = require('./routes');
const keys = require('./keys.json')
const register = require('./routes/api/register')

const environment = app.get('env');

app.use(session({
  secret: keys.sessionKey,
  resave: false,
  rolling: true,
  cookie: {
    maxAge: 900000
  },
  store: new MongoStore({
    url: `${keys.mongoUrl}gesample`
  }),
  saveUninitialized: false
}))

// app.engine('hanlebars',handleBars({defaultLayout:"main"}));
// app.use("view engine",'handlebars')

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(register);

app.listen(PORT, function() {
  console.log('Listening on port: ' + PORT);
});