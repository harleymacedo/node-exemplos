const express = require('express')
const app = express()
const produtosRouter = require('./routers/produtosRouter')

//Rota simples
app.get('/', (req, res) => {
    res.send('Home')
})

//Acesso via endereço (url)
app.get('/produto', (req, res) => {
    res.send('Produtos page')
})

//Acesso via form ou endereço sobrescrito(method-override)
app.post('/produto', (req, res) => {
    res.send('Produto cadastrado')
})

//Rota com parametro
app.get('/produto/detalhe/:codigo', produtosRouter.detalheProduto)

app.listen(3000)
