import Payroll from '../models/payrollModel.js';
import Tutor from '../models/tutorModel.js';

export const addHoursWorked = async (req, res) => {
    const {tutorId, totalHoursWorked} = req.body;

    try {
        //using findById to search for Tutor
        const tutor = await Tutor.findById(tutorId);
        if (!tutor) return res.status(404).send("No Tutor Can Be Found");
        // if found
        // adding tutor hours to totalHoursWorked
        tutor.workHours += totalHoursWorked;
        await tutor.save();

        res.status(200).send({
            success: true,
            message: 'Hours Allocated Correctly',
        });
    } catch (err) {
        res.status(500).send({ message:"Error"});
    }
};

export const calculatePay = async (req, res) => {
    const {tutorId} = req.body;

    try {
        const tutor = await Tutor.findById(tutorId);
        if (!tutor) return res.status(404).send("No Tutor Can Be Found");

        // Multiply total hours worked by tutor's hourly rate
        const totalSalary = tutor.workHours * tutor.hourlyRate;

        const payroll = new Payroll({
            // mongoDB unique id
            tutor: tutor._id, 
            hoursWorked: tutor.workHours,
            totalAmount: totalSalary,
        });
        await payroll.save();

        //reset the workHours for next calculation
        tutor.workHours = 0;
        await tutor.save();

        res.status(200).send({
            success: true,
            message: 'Payroll Allocated Correctly',
        });
    } catch (err) {
        res.status(500).send({ message:"Error"});
    }
};

// will fetch history of payments for a specific tutor
export const getPaycheckHistory = async (req, res) => {
    const {tutorId} = req.params;

    try {
        //Find payroll of specific tutor
        const history = await Payroll.find({tutor: tutorId}).populate('tutor', 'name email');
        if (!history.length) return res.status(404).send("No history");

        res.status(200).send(history);
    } catch (err) {
        res.status(500).send({ message:"Error"});
    }
};
