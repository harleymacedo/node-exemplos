//Importando pacotes
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const ejs = require('ejs')
const methodOverride = require('method-override')
const session = require('express-session')
const projetoModel = require('./model/projetoModel')

//Instanciando objeto de aplicação
const app = express()

//Configurando motor de rendirização
app.set('view engine', 'ejs')

//Cadastrando middlewares
app.use(express.static(__dirname + '/public'))
app.use(methodOverride('_method', {methods: ['GET', 'POST', 'PUT', 'DEL']}))
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(session({secret: 'secret-key', resave: false, saveUninitialized: false,}))
app.use(cors())

//Rota de login
app.get('/', (req, res) => {
    res.render('login')
})

//Rotas de projeto
app.get('/projeto/show/All', projetoModel.readAll)
app.get('/projeto/detail/:id', projetoModel.detail)
app.get('/projeto/new/form', projetoModel.newForm)
app.post('/projeto/save', projetoModel.save)
app.delete('/projeto/delete', projetoModel.del)
app.get('/projeto/update/form', projetoModel.updateForm)
app.put('/projeto/update', projetoModel.upd)
app.get('/api', (req, res) => {
    res.send({nome: 'Harley', sobreNome: 'Macêdo', estado: 'CE'})
})

//Definindo servidor
app.listen(3000, () => {
    console.log('App rodando na porta 3000')
})