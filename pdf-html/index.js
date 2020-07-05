const express = require('express')
const app = express()
var pdf = require('html-pdf')

app.get('/relatorio', function(req, res) {
    pdf.create('Relatorio diario', {  } ).toFile('./meuPdf.pdf', function(err, resposta) {
        if (err) {
            console.log('Um erro aconteceu')
        } else {
            console.log(resposta)
        }
        res.send('Arquivo gerado')
    })
})

app.listen(3000)