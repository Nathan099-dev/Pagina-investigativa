const sqlite3  = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/investigacoes.sql', (err) => {
    if (err) {
        console.log('Erro ao acessar o banco de dados');

    }else{
        console.log('Conexão ao banco de dados bem sucedida')
    }
});

module.exports = db;
