const express = require('express');
const app = express();

app.use(express.json());

const route= require('./routes/routes');

app.use('/api', route);


app.listen(3000, () => {
    console.log('servidor rodando')
});

module.exports = app;
