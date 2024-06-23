const router = require('express').Router()

const CustomersController = require('../controllers/customers')


//Rotas
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

router.get('/register', (req, res) => {
    res.render('register', { 
        title: 'Cadastro Clientes'
    })
})

router.post('/register/add', CustomersController.add)


module.exports = router
