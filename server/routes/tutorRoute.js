import express from 'express';
import { getTutorName, getTutorPay, getTutorSubject, getTutorData, getAllTutorNames, addTutor, getTutorSubjectForAppointment, getTutorCardInfo } from '../controllers/tutorController.js';


const router = express.Router();

router.post('/getname', getTutorName);
router.post('/getsubject', getTutorSubject);
router.post('/gettutorpay', getTutorPay);

router.get('/getname', getTutorName);

router.post('/newtutor', addTutor);

router.get('/getTutorData', getTutorData);
router.get('/getsubject/:subjectId', getTutorSubjectForAppointment);                 //For appointment booking, fetches tutors absed on subject selected.
router.get('/getAllTutorNames', getAllTutorNames);
router.get('/getTutorCardInfo', getTutorCardInfo);


export default router;
