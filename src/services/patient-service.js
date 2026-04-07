const  { getDBConnection } = require('../../database/database');

const createPatient = async (patientData) => {
    const db = await getDBConnection();

    const {cpf, name} = patientData;

    const result = await db.run(
        'INSERT INTO patient (cpf, name) VALUES (?,?)',
        [cpf, name]
    );

    return {
        id: result.lastID,
        cpf,
        name
    };
};

const getAllPatients = async () => {
    const db = await getDBConnection();

    const result = await db.all(
        'SELECT * FROM patient');

    return result;
};

module.exports = {createPatient, getAllPatients};
