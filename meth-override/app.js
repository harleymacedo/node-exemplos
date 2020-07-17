const express = require('express')
const app = express()
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

//Config
app.use(methodOverride('_method', {methods: ['GET', 'POST', 'PUT', 'DELETE']}))
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(bodyParser.urlencoded({extended: true}))



app.get('/teste', (req, res) => {
    let tags = `
    <html>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    <form action="/recebeDados/?_method=PUT" method="POST">
        <p>Cidade: <input name="cidade" /></p>
        <p><input type="submit" value="Cadastrar" /></p>
    </form>
    </body>
    </html>
    `
    res.send(tags)
})

app.put('/recebeDados', (req, res) => {
    res.send('<h3>Dados enviados via PUT:' + req.body.cidade + '</h3>')
})

app.listen(3000)