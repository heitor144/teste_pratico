const express = require ('express')
const api = express()
const porta = 3000

api.get('/', (req, res) => {

    const rotaPadrao =
    {
        nome_rota: '/',
        codigo_status: '200',
        metodo: 'GET'
    }

    res.status(200)
    res.json(rotaPadrao)
})

// Cria usuarios
api.post('/cliente/novo', (req, res) => {

    const response = [
        {
            mensagem: 'Cliente criado com sucesso',
            status: 201
        }

    ]

    res.status(201)
    res.json(response)
})

// Atualiza cliente por cpf
api.put('/cliente/update/cpfcnpj/12345678901', (req, res) => {

    const response = [
        {
            mensagem: 'Dados atualizados com sucesso',
            status: 200
        }
    ]

    res.status(200)
    res.json(response)
})

api.listen(porta, () => {
    console.log(`Servidor em execução na porta: ${porta}`)
})