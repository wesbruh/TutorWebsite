import Tutor from '../models/tutorModel.js';

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
        const tutor = await Tutor.findById(tutorId, 'Subject');
        // returns subject of tutor based on id
        if (tutor){
            res.json({
                    subject: tutor.subject
            });
        } else {
            res.status(500).json({ error: 'Error fetching tutor Subject' });
        } 
    } catch (error){
        res.status(500).json({ error: 'Error fetching tutor Subject' });
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

export const getAllTutors = async (req, res) => {
    try {
        const tutors = await Tutor.find({}, 'name'); // Fetch only name
        res.status(200).json({ success: true, data: tutors });
    } catch (error) {
        console.error("Error fetching tutors:", error.message);
        res.status(500).json({ success: false, error: 'Error fetching tutors' });
    }
};