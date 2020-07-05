const pool = require('./connection');

readAll = async (req, res) => {
  try {
    await pool.connect()
    await pool.query('select * from projeto', (err, result) => {
        res.render('projetoView', {projetos: result});
    });
  } catch (err) {
    return res.send(err);
  }
};

detail = async (req, res) => {
    try {
        await pool.connect()
        let id = req.params.id
        //console.log(id)
        await pool.query('select * from projeto where id = $1', [id], (err, result) => {
            res.render('projetoDetalheView', {projeto: result})
        })
    } catch (err) {
        return res.send(err)
    }
}

newForm = (req, res) => {
    res.render('projetoNewFormView')
}

save = async (req, res) => {
  try{
    await pool.connect()
    //console.log(req.body.id, req.body.nome, req.body.tempo)
    await pool.query('insert into projeto values ($1, $2, $3)', [req.body.id, req.body.nome, req.body.tempo], (err, result) => {
      res.render('projetoNewFormView', {mensagem: 'Projeto salvo com sucesso!'})
    })
  } catch(err){
    res.send(err)
  }
}

del = async (req, res) => {
  try{
    await pool.connect()
    let id = req.body.id
    await pool.query('delete from projeto where id = $1', [id], (err, result) => {
      res.render('projetoNewFormView')
    })
  } catch (err) {
    res.send(err)
  }
}

updateForm = (req, res) => {

}

upd = async (req, res) => {

}

module.exports = { readAll, detail, newForm, save, del, updateForm, upd } 