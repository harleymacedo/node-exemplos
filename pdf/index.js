const express = require('express')
const PDFKit = require('pdfkit')
const fs = require('fs')

const app = express()

app.get('/', (req, res) => {
    const pdf = new PDFKit()
    pdf.text('Gerando PDF de teste - Texto do arquivo')
    pdf.end()
    pdf.pipe(fs.createWriteStream('teste.pdf')).on('finish', () => {
        res.download('./teste.pdf')
    })
})

app.listen(3000, () => {
    console.log('App rodando!')
})
