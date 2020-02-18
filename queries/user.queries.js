const User = require('../database/models/user.model');

// requête pour sauvegarder l'utilisateur
exports.createUser = async (body) => {
  try {
    const hashedPassword = await User.hashPassword(body.password);
    const user = new User({ 
      username: body.username,
      local: {
        email: body.email,
        password: hashedPassword
      }
    })
    return user.save();
  } catch(e) {
    throw e;
  }
}
