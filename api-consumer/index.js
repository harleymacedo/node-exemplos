const express = require('express')
const app = express()
const axios = require('axios')

app.get('/', (req, res) => {
    axios.get('https://projeto-crud-node.herokuapp.com/api')
        .then( (response) => {
            console.log(response)
        })
        .catch( (error) => {
            console.log(error)
        })
    res.send('Teste consumo api')
})

app.listen(4000, () => {
    console.log('Teste consumo api')
})
