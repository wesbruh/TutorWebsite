import express from 'express';
import { getTutorName } from '../controllers/tutorController.js';

const router = express.Router();

router.post('/getname', getTutorName);

export default router;
