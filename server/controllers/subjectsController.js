import Subject from "../models/subjectModel.js";

// Controller to get all subjects
export const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find(); // Fetch all subjects from the database

    if (subjects.length === 0) {
        return res.status(404).json({ message: "No subjects found" });
      }
      
    res.status(200).json(subjects); // Send them as a JSON response
  } catch (error) {
    console.error('Error fetching subjects:', error);
    res.status(500).json({ error: 'Failed to fetch subjects' });
  }
};