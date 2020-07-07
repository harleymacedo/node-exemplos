const express = require("express")
const app = express()
const handlebars = require('express-handlebars')

app.set("view engine", "handlebars")
app.engine('handlebars', handlebars({defaultLayout: null}))

app.get("/", (req, res) => {
    res.render("index")
})
app.post("/upload", )

app.listen(3000, () => {
    console.log("Servidor rodando!")
})