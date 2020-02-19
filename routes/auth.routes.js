const passport = require('passport');
const { sessionNew, sessionCreate, sessionDelete } = require('../controllers/auth.controller');
const router =  require('express').Router();

// obtenir le formulaire de connexion pour s'authentifier
router.get('/signin/form', sessionNew);

// s'autentifier en utilisant la stratégie d'authentification local avec passport
router.post('/signin', passport.authenticate('local', { 
  successRedirect: '/',
  failureRedirect: '/auth/signin/form' 
}));

// se déconnecter
router.get('signout', sessionDelete);

module.exports = router;