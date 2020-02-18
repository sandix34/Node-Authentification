// const { createUser } = require('../queries/user.queries');

exports.userNew = (req, res, next) => {
  res.render('signup');
}

exports.userCreate = async (req, res, next) => {
  // TODO
  res.end();
}