const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/logo', (req, res) => {
    res.send('<img src="/imgs/piano.png" />')
})

app.listen(3000)
