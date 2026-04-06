const app = require('./src/app');
const { createDB } = require('./database/database');
const port = 3000;

async function startServer(){ 
    app.listen(port, () => {
        console.log('servidor rodando')
    });
}

