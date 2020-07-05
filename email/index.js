const express = require('express')
const app = express()
const nodemailer = require('nodemailer')

app.get('/', async (req, res) => {
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        auth: {
          user: 'harley.mello@ifce.edu.br',
          pass: process.env.smtpPass
        }
      });
      
      var mailOptions = {
        from: 'harley.mello@ifce.edu.br',
        to: 'harley.ip@gmail.com',
        subject: 'Enviando email com nodejs',
        text: 'Enviando email com nodejs usando a biblioteca nodemailer'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    res.send('Email enviado!')
})

app.listen(3000, () => {
    console.log('App rodando!')
})