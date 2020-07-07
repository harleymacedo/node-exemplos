const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const formidable = require('formidable')
const fs = require('fs')

app.set("view engine", "handlebars")
app.engine('handlebars', handlebars({defaultLayout: null}))

app.get("/", (req, res) => {
    res.render("index")
})
app.post("/upload", (req, res) => {
    let form = new formidable.IncomingForm()
    form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.path;
        var newpath = __dirname + '/upload/' + files.filetoupload.name;
        fs.rename(oldpath, newpath, function (err) {
        if (err) throw err
            res.send('Arquivo enviado e movido!');
        })
    })
})

app.listen(3000, () => {
    console.log("Servidor rodando!")
})