import express from 'express';
import {addHoursWorked, calculatePay, getPaycheckHistory} from '../controllers/payrollController.js';
//router object
const router = express.Router();

//POST Assign hours for tutor
router.post('/addHours', addHoursWorked);
//POST calculate tutor's expected pay
router.post('/calculatePay', calculatePay);
//GET entire payroll history of tutor
router.get('/paycheckHistory/:tutorId', getPaycheckHistory);

export default router;
