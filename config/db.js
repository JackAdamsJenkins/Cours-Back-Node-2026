const mongoose = require('mongoose')

                    //   user    : pass  > Tous le reste ne doit pas être touché
const dbURI = process.env.MONGODB_URI

mongoose.connect(dbURI)
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(err => console.error("Erreur de connexion à MongoDB :", err))

module.exports = mongoose.connection
