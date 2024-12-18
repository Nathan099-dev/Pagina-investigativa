const express = require('express');
const bodyParser = require('body-parser');
const numVerifyRouter = require('./routes/numverify');

const app = express();
app.use(bodyParser.json())


//rota de redirecionamento para a página de login
app.get('/', (req, res) => {
    res.redirect('/public/html/login.html');
});

//rota para fazer o gerenciamento das investigações
app.get('/routes/investigacoes', investigacoesRouter);

app.use('/routes/numverify', numVerifyRouter);

//servir os arquivos estáticos
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});


