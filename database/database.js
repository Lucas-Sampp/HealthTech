const sqlite3 = require('sqlite3');

const { open } = require('sqlite');

const createDB = async () => {
    const db = await open ({
        filename: './database/database.db',
        driver: sqlite3.Database,
    });

    await db.get('PRAGMA foreign_keys = ON');

    await db.exec(
        `
                CREATE TABLE IF NOT EXISTS patient(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,  
                    name TEXT NOT NULL,                            
                    cpf TEXT UNIQUE NOT NULL                      
                );

                CREATE TABLE IF NOT EXISTS evolution(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,  
                    patient_id INTEGER,                          
                    date TEXT NOT NULL,
                    observations TEXT,
                    FOREIGN KEY (patient_id) REFERENCES patient(id)                       
                );
            `,
    );

  console.log("Banco de dados e tabela prontos!");
};

module.exports = { createDB };