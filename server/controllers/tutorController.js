import Tutor from '../models/tutorModel.js';

// const tutorId = 123;

export const getTutorName = async (req, res) => {
    const {tutorId} = req.body;

    try{
        const tutor = await Tutor.findById(tutorId, 'name');
        // returns name of tutor based on id
        if (tutor){
            res.json({ name: tutor.name
            });
        } else {
            res.status(500).json({ error: 'Error fetching tutor name' });
        } 
    } catch (error){
        res.status(500).json({ error: 'Error fetching tutor name' });
    }
    
};

export const getTutorSubject = async (req, res) => {
    const {tutorId} = req.body;

    try{
        const tutor = await Tutor.findById(tutorId, 'subject');
        // returns subject of tutor based on id
        if (tutor){
            res.json({
                    subject: tutor.subject
            });
        } else {
            res.status(500).json({ error: 'Error fetching tutor subject' });
        } 
    } catch (error){
        res.status(500).json({ error: 'Error fetching tutor subject' });
    }
};

export const getTutorPay = async (req, res) => {
    const {tutorId} = req.body;

    try{
        const tutor = await Tutor.findById(tutorId, 'amountDue');
        // returns pay of tutor based on id
        if (tutor){
            res.json({
                    amountDue: tutor.amountDue
            });
        } else {
            res.status(500).json({ error: 'Error fetching tutor amountDue' });
        } 
    } catch (error){
        res.status(500).json({ error: 'Error fetching tutor amountDue' });
    }
};

export const getTutorData = async (req, res) => {
    try {
      const tutors = await Tutor.find();
      res.json(tutors);
    } catch (error) {
      console.error("Error in getTutorName:", error);
      res.status(500).json({ error: "Internal Server Error"});
    }
};

export const getAllTutorNames = async (req, res) => {
    try {
        const tutors = await Tutor.find({}, 'name _id'); // Fetch only `name` and `_id`
        res.status(200).json({ success: true, data: tutors });
    } catch (error) {
        console.error("Error fetching tutors:", error.message);
        res.status(500).json({ success: false, error: 'Error fetching tutors' });
    }
};

export const addTutor = async(req, res) => {
    const { name, email } = req.body; // Declare the individual fields as the req.body.
    // Validation
    if (!name || !email) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    // Set a new review with the valid fields.
    const newTutor = new Tutor({ name, email });
    // Try to save the review.
    try {
        await newTutor.save();
        res.status(201).json({ sucess: true, data: newTutor });
    } catch (error) {
        console.error('Error saving tutor:', error.message);
        res.status(500).json({ sucess: false, message: 'Server error. Please try again later.' });
    }
};
export const getTutorSubjectForAppointment = async (req, res) => {
    const { subjectId } = req.params;  // Access subjectId from the URL parameter
    
    try {
        const tutors = await Tutor.find({ subjectId: subjectId }); // Find tutors based on subjectId
        if (tutors.length > 0) {
            res.json(tutors);
        } else {
            res.status(404).json({ error: 'No tutors found for this subject' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tutors by subject' });
    }
};