const passport = require('passport');

exports.sessionNew = (req, res, next) => {
  res.render('signin', { error: null });
}

exports.sessionCreate = (req, res, next) => {
  // premier paramètre --> authentification avec la stratégie local
  // deuxième paramètre --> une fonction de callback 
  passport.authenticate('local', (err, user, info) => {
    // si une erreur serveur, passe next pour rediriger vers le middleware de gestion d'erreur
    if (err) {
      next(e);
      // si pas d'utilisateur, réaffiche le formulaire de connexion avec message d'erreur
    } else if (!user) {
      res.render('signin', { error: info.message })
      // sinon créer une session pour l'utilisateur connecté et redirige sur la page d'accueil
    } else {
      req.login(user, (err) => {
        if (err) { 
          next(e) 
        } else {
          res.redirect('/');
        }
      })
    }
  })(req, res , next);
}

// permet à Passport de construire l'URL de redirection
exports.googleAuth = (req, res, next) => {
  passport.authenticate('google', {
    scope: ['email', 'profile']
  })(req, res, next);
}

// permet de rediriger l'utilisateur sur des URL différentes en fonction du succès et de l'échec de l'authentification
exports.googleAuthCb = (req, res, next) => {
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/'
  })(req, res, next);
}

exports.sessionDelete = (req, res, next) => {
  req.logout();
  res.redirect('/');
}