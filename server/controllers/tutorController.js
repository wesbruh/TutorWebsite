import Tutor from '../models/tutorModel.js';

export const getTutorName = async (req, res) => {
    const {tutorId} = req.body;

    try{
        const tutor = await Tutor.findById(tutorId);
        // returns name of tutor based on id
        if (tutor){
            res.json({ name: tutor.name });
        } else {
            res.status(500).json({ error: 'Error fetching tutor info' });
        } 
    } catch (error){
        res.status(500).json({ error: 'Error fetching tutor info' });
    }
};