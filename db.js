const sql = require('sql2');

const db = new sql.Database('./db/investigacoes.sql', (err) => {
    if (err) {
        console.log('Erro ao acessar o banco de dados');

    }else{
        console.log('Conexão ao banco de dados bem sucedida')
    }
});

module.exports = db;
