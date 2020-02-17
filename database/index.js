const mongoose = require("mongoose");
const dotenv = require ('dotenv'); 
dotenv.config ();
const db = process.env.MONGODB_CONNECT

// connection à la base de donnée
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then( () => console.log('connexion db 👍') )
        .catch( err => console.log(err) );