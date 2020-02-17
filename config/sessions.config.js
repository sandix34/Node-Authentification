const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const { app } = require('./app');

app.use(session({
  // secret est utilisé par express-session pour signer le cookie
  secret: 'cersei',
  // permet de forcer la sauvegarde de la session à chaque requête
  resave: false,
  name: 'jesuisunid',
  // permet de sauvegarder une session même si elle ne contient aucune information
  saveUninitialized: true,
  cookie: {
    // accès au cookie uniquement côté serveur
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 14 // session 14 days
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    // fixe un ttl égal au maxAge
    ttl: 60 * 60 * 24 * 14
  })
}));