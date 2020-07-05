const express = require("express")
const app = express()
const multer = require("multer")
app.set("view engine", "ejs")
const upload = multer({dest: "uploads/"})

app.get("/", (req, res) => {
    res.render("index")
})
app.post("/upload", upload.single("file"), (req, res) => {
    res.send("Arquivo recebido!")
})

app.listen(8080, () => {
    console.log("Servidor rodando!")
})