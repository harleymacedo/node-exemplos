//Importações
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

//Configurações
app.use(cookieParser())

//Rotas
app.get('/', (req, res) => {
    res.cookie('nome', 'Harley')
    res.send('<a href="/verCookie">Proxima pagina</a>')
})
app.get('/verCookie', (req, res) => {
    console.log(req.cookies)
    res.send(req.cookies.nome)
})

//Atende cliente
app.listen(3000, () => {
    console.log('App rodando!')
})