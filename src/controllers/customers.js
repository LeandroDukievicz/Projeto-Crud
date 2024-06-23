const CustommersModel = require('../models/customers')

function add(req, res) {
    const  {
        name,
        age,
        email,
        password,
    } = req.body

    const register = new CustommersModel({
        name,
        age,
        email,
        password,
    })
    register.save()
    res.send('Cadastro Realizado')
}



module.exports = { 
    add
}