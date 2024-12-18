const express = reequire('express');
const axios  = require('axios');
const router = express.Router();
const {numverifyKey} = require('../config/dotenv');
const { response } = require('express');

router.get('/validar-numero', async(req, res) => {
    const {numero} = req.query;

    try{
        const response =  await axios.get('')
        res.sjon(response.data)
    } catch(error){
        res.status(500).json({erro:'Erro ao validar o número de telefone'})
    }
});

module.exports = router;
