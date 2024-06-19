
const express = require('express')
const path = require('path')

const app = express()
//Definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

//habilitando server pra receber dados via post (form)
app.use(express.urlencoded({extended: true}))

//Rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

// Error404 (Not Found)
app.use((req, res) => {
    res.send('Página não Encontrada !!')
})

//Executando servidor


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))