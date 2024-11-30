import express from 'express';
import { getTutorName, getTutorPay, getTutorSubject, getTutorData } from '../controllers/tutorController.js';

const router = express.Router();

router.post('/getname', getTutorName);
router.post('/getsubject', getTutorSubject);
router.post('/gettutorpay', getTutorPay);
router.get('/getTutorData', getTutorData);
export default router;
