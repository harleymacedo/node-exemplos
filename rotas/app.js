const express = require('express')
const app = express()
const produtosRouter = require('./routers/produtosRouter')

//Rota centralizada
app.get('/produtos', produtosRouter.listarTodos)

//Rota com parametro
app.get('/produtos/detalhe/:codigo', (req, res) => {
    let codigo = req.params.codigo
    res.ssend('<h2>Detalhe de Produto</h2> <ul> <li>' + codigo + '</li> <li>R$ 10,50</li> </ul>')
})

//Rota com vários parametros
app.get('/categoria/:categ/subcategoria/:subcateg', (req, res) => {
    let categ = req.params.categ
    let subcateg = req.params.subcateg
    res.send('<h2>Categorias</h2> <p>Categoria:' + categ + '</p> <p>Subcategoria:' + subcateg + '</p>')
})

app.listen(3000)
