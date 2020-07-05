const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/api/:id', function(req, res) {
    res.set('Content-Type', 'application/json')
    res.status(200)
    let profs = ['Ana', 'João', 'Talles']
    let meuId = req.params.id
    res.json({
        nome: profs[meuId]
    })
})

app.listen(4000, function() {
    console.log('Aplicação executando em: http://localhost:4000/')
})
