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