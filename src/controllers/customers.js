const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Cadastro de Clientes'
const listTitle = 'Listagem de Usuários'

function index(req, res) {
    res.render('register', {
        title: defaultTitle
    })
}

async function add(req, res) {
    const  {
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,
    })

    register.save()

    res.render('register' , {
        title:defaultTitle,
        message: 'Cadastro realizado com Sucesso !'
    })
}

async function list(req, res) {
    const users = await CustomersModel.find()

    res.render('list', {
        title:listTitle,
        users,
    })
}

function formEdit(req, res) {
    res.render('edit', {
        title: 'Editar Usuário'
    })
}


module.exports = {
    index,
     add, 
     list,
     formEdit,
    }
