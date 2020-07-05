const express = require('express')
const app = express()

var email = 'your_seller_email@email.com';
var token = 'your_long_token';
 
var PagSeguro = require('pagseguro-node');
var pagSeguro = new PagSeguro(email, token);
 
// provide redirect URL after PagSeguro sends you the transaction code
var URL_RED_PAG = 'https://pagseguro.uol.com.br/v2/checkout/payment.html?code=';

pagSeguro.addItem({
  id: 1,
  description: 'Item description 1',
  amount: '11.11',  
  quantity: 1,
  weight: 1200,
  shippingCost: '0.00'
});

app.get('/', function (req, res) {
    pagSeguro.processOrder(function (err, response, body) {
      if (err) {
        res.json(err);
      }
      else {
        res.redirect(URL_RED_PAG + body.code);      
      }   
    });
  });
