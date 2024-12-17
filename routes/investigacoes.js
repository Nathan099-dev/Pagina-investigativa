const express = require('express');

const router = express.Router();
const {adicionaInvestigacao, buscarInvestigacoes} = require('../models/investigacoes')

//Rota para adicionar uma nova investigação
router.post('/',(req, res) =>{
    const investigacao = req.body;
    adicionaInvestigacao(investigacao, (err, id) => {
        if (err) {
            return res.status(500).send('Erro');
        }

        res.status(201).send({id, ...investigacao})
    });
});

//rotas para obter todas as investigações em andamento
router.get('/', (req, res) => {
    buscarInvestigacoes((err, rows) => {
        if (err) {
            return res.status(500).send('Erro! Nenhuma investigação encontrada')
        }else{
            return res.status(200).send(rows)
        }
    });
});

module.exports = router;