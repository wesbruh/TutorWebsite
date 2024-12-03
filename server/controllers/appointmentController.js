import Appointment from "../models/appointmentModel.js";
import Tutor from "../models/tutorModel.js";
import User from "../models/userModel.js";

// Controller to create an appointment
export const createAppointment = async (req, res) => {
    try {
    console.log("Request Body:", req.body);
      const { tutorId, userId, subject, date, duration } = req.body;
  
      // Validate tutorId and studentId
    const tutor = await Tutor.findById(tutorId);
    if (!tutor) {
      return res.status(404).json({ error: "Tutor not found" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

      // Create a new appointment instance
      const newAppointment = new Appointment({
        tutorId: tutor._id,           // grab tutor object id
        tutorName: tutor.name,        // grab tutor name
        userId: user._id,             // grab user object id
        firstName: user.firstName,     // user model first name
        subject,
        date,
        duration,
        status: 'scheduled',          // Default status
      });
  
      // Save the new appointment to MongoDB
      await newAppointment.save();

      res.status(201).json({ 
        message: 'Appointment created successfully!', 
        appointment: newAppointment,
       });
    } catch (error) {
      console.error('Error creating appointment:', error);
      res.status(500).json({ error: 'Failed to create appointment', details: error.message });
    }
  };