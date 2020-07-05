const express = require('express')
const app = express()

const googleMapsClient = require('@google/maps').createClient({
  key: MAPS_KEY
});

googleMapsClient.geocode({
  address: 'Avenida Maria Letícia Leite Pereira, Juazeiro do Norte, Brasil'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  } else {
    console.log(err)
  }
});
