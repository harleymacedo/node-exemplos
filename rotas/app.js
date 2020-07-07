const express = require('express')
const app = express()
const produtosRouter = require('./routers/produtosRouter')
const handlebars = require('express-handlebars')

//definir engine
app.engine('handlebars', handlebars({defaultLayout: null}))
app.set('view engine', 'handlebars')

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

//Rota com parametro com view
app.get('/produto/detalhe/:codigo', produtosRouter.detalheProduto)

app.listen(3000)
