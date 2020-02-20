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

exports.sessionDelete = (req, res, next) => {
  req.logout();
  res.redirect('/auth/signin/form');
}