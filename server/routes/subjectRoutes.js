import express from "express";
import { getSubjects } from "../controllers/subjectsController.js";

// Initialize router
const router = express.Router();

// Define the route to get all subjects
router.get("/subjects", getSubjects);

export default router;