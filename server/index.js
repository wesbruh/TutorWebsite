import cors from "cors";
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import payrollRoutes from "./routes/payrollRoute.js";
import tutorRoutes from "./routes/tutorRoute.js";
import passport from "./passport.js";
import session from "express-session";
import { googleCallbackController } from "./controllers/authController.js";
import { requireSignIn } from "./middlewares/authMiddleware.js";
// import userRoute from "./routes/userRoute.js";
import userModel from "./models/userModel.js";
import reviewRoutes from "./routes/reviewRoutes.js"; // Import review routes
import appointmentRoutes from './routes/appointmentRoutes.js';
import subjectRoutes from './routes/subjectRoutes.js';

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

//API Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/payroll", payrollRoutes);
app.use("/api/v1/tutorRoute", tutorRoutes);
app.use("/api/v1/appointmentRoutes", appointmentRoutes);
app.use("/api/v1/subjectRoutes", subjectRoutes);

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