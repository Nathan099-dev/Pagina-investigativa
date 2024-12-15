import {db} from '../db';

const criarTabelaDeInsersaoDeDados = () => {
    const query = `
    CRETE TABLE IF NO EXISTS investigações(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(50) NOT NULL,
    informações TEXT NOT NULL,
    datainicio DATE NOT NULL
    );

    INSERT INTO investigacões (nome, informações, datainicio) VALUE
    ('João da Silva', 'informações  sobre João', '2024-12-01');
    ('Maria Cristina', 'informações  sobre Maria', '2024-12-05');
    
    `;

    db.exec(query, (err) => {
        if (err) {
            console.log('Erro ao criar a tabela e inserir os dados', err.message)

        }else{
            console.log('Tabela criada com sucesso');
        }
    });
};

criarTabelaDeInsersaoDeDados();

module.exports = { 
adicionarInvestigacao: (investigacao, callback) => { const { nome, informacoes, dataInicio } = investigacao; 
const query = `INSERT INTO Investigacoes (nome, informacoes, dataInicio) VALUES (?, ?, ?)`; 
db.run(query, [nome, informacoes, dataInicio], function(err) { 
    callback(err, this.lastID); 

});

},

buscarInvestigacoes: (callback) => {
    const query = 'SELECT * FROM investigações';
    db.all(query, [], (err, rows) => {
        callback(err, rows);
    });
},

};