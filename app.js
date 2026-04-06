const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('testando');
});

app.post('/teste/:num', (req, res) => {
    res.send('recebir esse valor', req.params.num);
});

app.listen(3000, () => {
    console.log('servidor rodando')
});

module.exports = app;
