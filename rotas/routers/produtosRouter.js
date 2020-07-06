function listarTodos(req, res) {
    res.status(200)
    res.type('html')
    res.send('<ol> <li>P1</li> <li>P2</li> <li>P3</li> <li>P4</li> <li>P5</li> </ol>')
}

function detalheProduto(req, res) {
    res.status(200)
    res.type('html')
    res.send('Detalhe do produto ' + req.params.codigo)
}

module.exports = {listarTodos, detalheProduto}
