import tutorModel from "../models/tutorModel.js";
import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";
import passport from "passport";

export const registerController = async (req, res) => {
  try {
    const { firstName, lastName, name, email, password, role, answer } =
      req.body;
    //validations
    if (!firstName) {
      return res.send({ message: "First name is Required" });
    }
    if (!lastName) {
      return res.send({ message: "Last name is Required" });
    }
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!answer) {
      return res.send({ message: "Question is Required" });
    }
    if (!["student", "tutor"].includes(role)) {
      return res.status(400).json({ error: "Invalid role" });
    }
    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    // save
    const user = await new userModel({
      firstName,
      lastName,
      name,
      email,
      password: hashedPassword,
      role,
      answer,
    }).save();

    /*if (role === "tutor") {
      const tutor = new tutorModel({
        name: `${firstName} ${lastName}`,
        email: `${email}`
      }).save();
      
    }*/
    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Registeration",
      error,
    });
  }
};

//POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

export const forgotPasswordController = async (req, res) => {
  try {
    const { email, newPassword, answer } = req.body;
    //validations
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!newPassword) {
      return res.send({ message: "New password is Required" });
    }
    if (!answer) {
      return res.send({ message: "Answer is Required" });
    }
    //check user
    const user = await userModel.findOne({ email, answer });
    //validations
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "Wrong Email or Answer",
      });
    }
    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error forgot password",
      error,
    });
  }
};

//test controller
export const testController = (req, res) => {
  res.send("Protect route");
};

// Handle Google OAuth Callback
export const googleCallbackController = async (req, res) => {
  try {
    const user = req.user; // User attached by Passport.js
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // res.status(200).send({
    //   success: true,
    //   message: "login successfully",
    //   user: {
    //     _id: user._id,
    //     name: user.name,
    //     email: user.email,
    //     role: user.role,
    //   },
    //   token,
    // });

    // Redirect to frontend with token (or send it directly)
    res.redirect(
      `http://localhost:3000/google-success?token=${token}&name=${user.name}`
    );
  } catch (error) {
    console.error("Google Callback Error:", error);
    res
      .status(500)
      .send({ success: false, message: "Error during Google login", error });
  }
};
