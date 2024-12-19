const sql = require('mysql2');

const conexão = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'natgambini1234',
    database: 'paginainvestigativa'
});

connection.connect(err => {
    if (err) {
        console.log('Erro na conexão com o banco de dados', err);
        return;
    }else{
        console.log('Conectado ao banco  de dados mysql')
    }
 
});

module.exports = conexão;