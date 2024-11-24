import express from 'express';
import { getTutorName, getTutorSubject } from '../controllers/tutorController.js';

const router = express.Router();

router.post('/getname', getTutorName);
router.post('/getsubject', getTutorSubject);
export default router;
