import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
// REGISTER | | METHOD POST
router.post("/register", registerController);

//Login || POST
router.post("/login", loginController);

//Forgot password || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, testController);

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
