const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded( {extended: false} ))

app.get('/form', (req, res) => {
    let html = `
    <html>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    <form action="/dados" method="post">
        <p>Email: <input name="email" /></p>
        <p><input type="submit" value="Cadastrar" /></p>
    </form>
    </body>
    </html>
    `
    res.send(html)
})

app.post('/dados', (req, res) => {
    let email = req.body.email
    res.send('Email passado: ' + email)
})

app.listen(3000, () => {
    console.log('App rodando!')
})