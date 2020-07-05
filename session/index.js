const express = require('express')
const app = express()
const session = require('express-session')

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
}))

app.get('/', (req, res) => {
    if (!req.session.numVisitas) {
        req.session.numVisitas = 1
    } else {
        req.session.numVisitas += 1
    }
    res.send('<p>Testando!' + req.session.numVisitas + '</p>')
})

app.listen(3000, () => {
    console.log('App rodando!')
})
