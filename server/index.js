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

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
  //res.send('<a href ="/auth/google"> Google </a>');
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
  passport.authenticate("google", {
    successRedirect: "/google/success",
    failureRedirect: "/google/failure",
  })
);

app.get("/google/success", (req, res) => {
  res.send("google success");
});

app.get("/google/gaiure", (req, res) => {
  res.send("google failure");
});
