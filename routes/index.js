const router = require('express').Router();
const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');
// middleware permettant de protéger une route
const { ensureAuthenticated } = require('../config/security.config');

router.use('/users', userRoutes);
router.use('/auth', authRoutes);

router.get('/', (req, res) => {
  // grâce à passport l'utilisateur est disponible sur req.user
  res.render('index', { user : req.user });
});

// route protégée
router.get('/protected', ensureAuthenticated, (req, res) => {
  res.render('protected');
})

module.exports = router;