import express from "express";
import {createAppointment}  from "../controllers/appointmentController.js";

//router object
const router = express.Router();

// Route to create an appointment
router.post("/bookAppointment", createAppointment);

// NOT READY YET
// // Route to get an appointment by ID
// router.get('/appointments/:id', getAppointment);

// // Route to update an appointment
// router.put('/appointments/:id', updateAppointment);

// // Route to delete an appointment
// router.delete('/appointments/:id', deleteAppointment);

export default router;