const path = require('path');
const express = require('express');
require('./database');
const app = express();
const router = require('./routes');
// exporter l'app Express pour l'utiliser dans session.config.js
exports.app = app;
require('./config/sessions.config');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

app.listen(3000);