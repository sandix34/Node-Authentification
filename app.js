const path = require('path');
const express = require('express');
require('./database');
const app = express();
// exporter l'app Express pour l'utiliser dans session.config.js
exports.app = app;
require('./config/session');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',  (req, res) => {
  if (req.session.views) {
    req.session.views += 1;
  } else {
    req.session.views = 1;
  }
  res.render('index');
});

app.listen(3000);