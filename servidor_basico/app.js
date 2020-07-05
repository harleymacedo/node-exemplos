//Importando o módulo http
const http = require('http')

//Lógica para exibir imagem
let dataAtual = new Date()
let hora = dataAtual.getHours()
if (hora >= 11) 
    img = '<img src="https://img.icons8.com/nolan/64/cloudflare.png">'
else
    img = '<img src="https://img.icons8.com/dusk/64/000000/sun.png"></img>'

//Instanciando servidor
const servidor = http.createServer( function(requisicao, resposta) {
    if (requisicao.url == '/') { resposta.end(img) }
    else { resposta.end('Necessita fazer Login!') }
} )

//Ativando o servidor
servidor.listen(3000)
