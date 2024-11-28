import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import payrollRoutes from "./routes/payrollRoute.js";
import tutorRoutes from "./routes/tutorRoute.js";
import cors from "cors";
import passport from "./passport.js";
import session from "express-session";
import { googleCallbackController } from "./controllers/authController.js";
import { requireSignIn } from "./middlewares/authMiddleware.js";
// import userRoute from "./routes/userRoute.js";
import userModel from "./models/userModel.js";
import reviewRoutes from "./routes/reviewRoutes.js"; // Import review routes

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/payroll", payrollRoutes);
app.use("/api/v1/tutorRoute", tutorRoutes);
// app.use("/api/v1/subjectsRoute", subjectsRoutes);

app.use("/api/v1/reviews", reviewRoutes);
//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
  //res.send('<a href ="/auth/google"> Google </a>');
});

app.get("/userRoute", (req, res) => {
  userModel
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});

//google
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  googleCallbackController
);

app.get("/google/success", (req, res) => {
  res.send("google success");
});

app.get("/google/gaiure", (req, res) => {
  res.send("google failure");
});

// const Subject = mongoose.model('Subject', new mongoose.Schema({ name: String }));
// const Tutor = mongoose.model('Tutor', new mongoose.Schema({
//     name: String,
//     subjectId: mongoose.Schema.Types.ObjectId,
//     availableTimes: [Date],
// }));
// const Appointment = mongoose.model('Appointment', new mongoose.Schema({
//     tutorId: mongoose.Schema.Types.ObjectId,
//     time: Date,
// }));

// // Get all subjects
// app.get('/api/subjects', async (req, res) => {
//     const subjects = await Subject.find();
//     res.json(subjects);
// });

// // Get tutors by subject
// app.get('/api/v1/tutorRoute/:subjectId', async (req, res) => {
//     const tutors = await Tutor.find({ subjectId: req.params.subjectId });
//     res.json(tutors);
// });

// // Get available times for a tutor
// app.get('/api/times/:tutorId', async (req, res) => {
//     const tutor = await Tutor.findById(req.params.tutorId);
//     const appointments = await Appointment.find({ tutorId: req.params.tutorId });
//     const bookedTimes = appointments.map(app => app.time.toISOString());
//     const availableTimes = tutor.availableTimes.filter(
//         time => !bookedTimes.includes(new Date(time).toISOString())
//     );
//     res.json(availableTimes);
// });

// // Book an appointment
// app.post('/api/appointments', async (req, res) => {
//     const { tutorId, time } = req.body;
//     const appointment = new Appointment({ tutorId, time });
//     await appointment.save();
//     res.json({ message: 'Appointment booked!' });
// });
