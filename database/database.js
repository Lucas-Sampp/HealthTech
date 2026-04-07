const sqlite3 = require('sqlite3');

const { open } = require('sqlite');

const dbConfig = {
    filename: './database/database.db',
    driver: sqlite3.Database,
};

const getDBConnection = async () => {
    const db = await open(dbConfig);
    await db.get('PRAGMA foreign_keys = ON');
    return db;
};

const createDB = async () => {
    const db = await getDBConnection();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS patient (
            id INTEGER PRIMARY KEY AUTOINCREMENT,  
            name TEXT NOT NULL,                             
            cpf TEXT UNIQUE NOT NULL                             
        );

        CREATE TABLE IF NOT EXISTS evolution (
            id INTEGER PRIMARY KEY AUTOINCREMENT,  
            patient_id INTEGER,                           
            date TEXT NOT NULL,
            observations TEXT,
            FOREIGN KEY (patient_id) REFERENCES patient(id)                      
        );
    `);

    console.log("Banco de dados e tabelas inicializados!");
};

module.exports = { createDB, getDBConnection };