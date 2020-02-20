const { sessionNew, sessionCreate, sessionDelete } = require('../controllers/auth.controller');
const router =  require('express').Router();

// obtenir le formulaire de connexion pour s'authentifier
router.get('/signin/form', sessionNew);

// s'autentifier 
router.post('/signin', sessionCreate );

// se déconnecter
router.get('/signout', sessionDelete);

module.exports = router;