const { sessionNew, sessionCreate, sessionDelete, googleAuth, googleAuthCb } = require('../controllers/auth.controller');
const router =  require('express').Router();

// obtenir le formulaire de connexion pour s'authentifier
router.get('/signin/form', sessionNew);

// s'autentifier 
router.post('/signin', sessionCreate );

// se déconnecter
router.get('/signout', sessionDelete);

router.get('/google', googleAuth);
router.get('/google/cb', googleAuthCb);

module.exports = router;