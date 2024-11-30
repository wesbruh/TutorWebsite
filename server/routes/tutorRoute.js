import express from 'express';
import { getTutorName, getTutorPay, getTutorSubject, getAllTutors } from '../controllers/tutorController.js';

const router = express.Router();

router.post('/getname', getTutorName);
router.post('/getsubject', getTutorSubject);
router.post('/gettutorpay', getTutorPay);
router.get('/getall', getAllTutors);

router.get('/test', (req, res) => {
    res.send('Tutor routes are working!');
});
export default router;
