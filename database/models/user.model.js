const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const schema = mongoose.Schema;

const userSchema = schema({
  local: {
    email: { type: String, required: true, unique: true },
    password: { type: String }
  },
  username: String
})

// méthode statique sur le modèle pour hacher les mots de passe
userSchema.statics.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  } catch(e) {
    throw(e)
  }
}

// méthode pour comparer les mots de passe de connxion et dans la base de données
// méthode non statique car elle sera utilisée sur les instances user.
// this.local.password fait référence à l'intance user sur laquelle on l'utilisera
userSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.local.password);
}

const User = mongoose.model('user', userSchema);

module.exports = User;