const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const handleBars = require('express-handlebars');
const app = express();
const morgan = require('morgan');
const MongoStore = require('connect-mongo')(session);
const sessions = require('express-sessions');
const PORT = process.env.PORT || 8080;
const routes = require('./routes');
const keys = require('./keys.json')

const environment = app.get('env');

app.use(session({
  secret: keys.sessionKey,
  resave: false,
  rolling: true,
  cookie: {
    maxAge: 900000
  },
  store: new MongoStore({
    url: `mongodb://${keys.mongoUrl}/session?authSource=${keys.mongoUser}`
  }),
  saveUninitialized: false
}))

app.engine('hanlebars',handleBars({defaultLayout:"main"}));
app.use("view engine",'handlebars')

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.listen(PORT, function() {
  console.log('Listening on port: ' + PORT);
});