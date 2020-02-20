const router = require('express').Router();
const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');

router.use('/users', userRoutes);
router.use('/auth', authRoutes);

router.get('/', (req, res) => {
  // grâce à passport l'utilisateur est disponible sur req.user
  res.render('index', { user : req.user });
});

module.exports = router;