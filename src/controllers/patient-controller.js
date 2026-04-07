const patientService = require ('../services/patient-service');

const createPatient = async (req, res) => {
    try {
        const {name, cpf} = req.body;
        if (!name || !cpf) {
            return res.status(400).json ({error: 'nome e cpf são obrigatórios.'});
        }

        const newPatient = await patientService.createPatient({name, cpf});
        return res.status(201).json(newPatient);

    } catch (error) {
        console.error('erro ao criar paciente:', error);
    }
}

const getAllPatient = async (req, res) => {
    try {
        const patients = await patientService.getAllPatients();
        console.log(patients)

        return res.status(200).json(patients);
       
    } catch (error) {
        console.error('Erro ao consultar pacientes', error);
        return res.status(500).json({error: 'Erro ao consultar todos os usuarios'});
        
    }
}

module.exports = { createPatient, getAllPatient };