import express from 'express';
import { getTutorName, getTutorPay, getTutorSubject, getTutorData, getAllTutorNames } from '../controllers/tutorController.js';

const router = express.Router();

router.post('/getname', getTutorName);
router.post('/getsubject', getTutorSubject);
router.post('/gettutorpay', getTutorPay);

router.get('/getname', getTutorName);

router.get('/getTutorData', getTutorData);
router.get('/getAllTutorNames', getAllTutorNames)
export default router;
