const express  = require('express');
const bodyparser = require('body-parser');
const investigacoes = require('./investigacoes');

const app = express();
app.use(bodyparser.json());
app.use('/routes/investigacoes')

//rota para redirecionar para a página principal do site
router.get((req, res) => {
    res.redirect('../html/index.html')
});

const port = process.env.port || 3000;
app.listen( port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})