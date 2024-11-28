import express from 'express';
import { getTutorName, getTutorPay, getTutorSubject } from '../controllers/tutorController.js';

const router = express.Router();

router.post('/getname', getTutorName);
router.post('/getsubject', getTutorSubject);
router.post('/gettutorpay', getTutorPay);
export default router;
