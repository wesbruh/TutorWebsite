const Payroll = require('..payrollModel.js')
const Tutor = require('..tutorModel.js')

exports.addHoursWorked = async (req, res) => {
    const {tutorId, totalHoursWorked} = req.body;

    try {
        // using findById to search for Tutor
        const tutor = await Tutor.findById(tutorId);
        if (!tutor) return res.status(404).send("No Tutor Can Be Found");
        // if found
        // add tutor hours to totalHoursWorked
        tutor.workHours += totalHoursWorked;
        await tutor.save();

        res.status(200).send({
            success: true,
            message: 'Hours Allocated Correctly'
        })
    }   catch(err){
        res.status(500).send({message: "Error"})
    }
};

exports.getPayroll = async (req, res) => {
    const {tutorId} = req.body;

    try {
        const tutor = await Tutor.findById(tutorId);
        if (!tutor) return res.status(404).send("No Tutor Can Be Found");
        // multiplying total hours worked by tutor by rate
        const totalSalary = tutor.workHours * tutor.hourlyRate;

        const payroll = new Payroll({
            //mongodb unique id
            tutor: tutor._id,
            hoursWorked: tutor.workHours,
            totalAmount: totalSalary,
        });
        await payroll.save();
        // reset wokrhours for next calculation
        tutor.workHours = 0;
        await tutor.save();

        res.status(200).send({
            success: true,
            message: 'Payroll Allocated Correctly'
        })
    }   catch(err){
        res.status(500).send({message: "Error"})
    }
};
// fetch history of payments for each tutor
exports.getPaycheckHistory = async (req, res) =>{
    const {tutorId} = req.params;

    try {
        // finding payroll of specifc tutor
        const history = await Payroll.find({ tutor: tutorId }).populate('tutor', 'name email');
        if (!history.length) return res.status(404).send("No history");

        res.status(200).send(history);
    }   catch(err){
        res.status(500).send({message: "error"});
    }

}