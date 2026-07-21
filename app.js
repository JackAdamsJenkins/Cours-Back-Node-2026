const express = require('express')
const app = express()
const port = 3000
// Import des routes
const productsRoutes = require('./routes/products')

app.use(express.json())

// Monte le routeur sur le chemin de base
app.use('/api/v1/products', productsRoutes)

//     URL
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon API RESTful !')
})

app.listen(port, () => {
    // Ce console log s'affiche uniquement côté SERVEUR et non côté CLIENT
    console.log(`Serveur démarré sur http://localhost:${port}`)
})