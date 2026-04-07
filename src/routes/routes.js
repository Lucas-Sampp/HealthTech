const express = require('express');
const router = express.Router();

const patientController = require('../controllers/patient-controller');

router.post('/patient', patientController.createPatient);
router.get('/patient', patientController.getAllPatient);

module.exports = router;
