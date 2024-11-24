import Tutor from '../models/tutorModel.js';

export const getTutorName = async (req, res) => {
    const {tutorId} = req.body;

    try{
        const tutor = await Tutor.findById(tutorId, 'name');
        // returns name of tutor based on id
        if (tutor){
            res.json({ name: tutor.name,
                    subject: tutor.subject
            });
        } else {
            res.status(500).json({ error: 'Error fetching tutor info' });
        } 
    } catch (error){
        res.status(500).json({ error: 'Error fetching tutor info' });
    }
};

export const getTutorSubject = async (req, res) => {
    const {tutorId} = req.body;

    try{
        const tutor = await Tutor.findById(tutorId, 'subject');
        // returns name of tutor based on id
        if (tutor){
            res.json({
                    subject: tutor.subject
            });
        } else {
            res.status(500).json({ error: 'Error fetching tutor info' });
        } 
    } catch (error){
        res.status(500).json({ error: 'Error fetching tutor info' });
    }
};