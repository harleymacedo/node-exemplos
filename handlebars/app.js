const express = require('express')
const app = express()
const handleBars = require('express-handlebars')

//Configurando view engine
app.engine('handlebars', handleBars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/cliente', (req, res) => { 
    res.render('clienteView', {nome: 'Ana', sobrenome: 'Carvalho', tags: tagsForm()})
})

app.listen(3000, () => {
    console.log('App rodando!')
})

function tagsForm () {
    return {tag1: 'form', tag2: 'canvas', tag3: 'table'}
}