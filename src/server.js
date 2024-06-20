
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')


const db = require('./database')
const routes = require('./routes')

const app = express()

// conectando banco de dados 
db.connect()

//Definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

//habilitando server pra receber dados via post (form)
app.use(express.urlencoded({extended: true}))

// Definindo Rotas 
app.use('/', routes)

// Error404 (Not Found)
app.use((req, res) => {
    res.send('Página não Encontrada !!')
})

//Executando servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))