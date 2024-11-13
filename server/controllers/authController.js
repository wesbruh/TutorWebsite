import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
    try {
        const {firstName, lastName, email, password, role} = req.body
        //validations
        if(!firstName) {
            return res.send({error: 'First name is Required'})
        } 
        if(!lastName) {
            return res.send({error: 'Last name is Required'})
        }     
        if(!email){
            return res.send({error: 'Email is Required'})
        }
        if(!password){
            return res.send({error: 'Password is Required'})
        }
        if (!['student', 'tutor'].includes(role)) {
            return res.status(400).json({ error: 'Invalid role' });
        }
        //check user
        const exisitingUser = await userModel.findOne({ email })
        //exisiting user
        if(exisitingUser){
            return res.status(200).send({
                success: true,
                message: 'Already Register please login',
            })
        }
        //register user
        const hashedPassword = await hashPassword(password)
        // save
        const user = await new userModel( {firstName, lastName, email, password:hashedPassword, role}).save()
        res.status(201).send({
            success: true,
            message: 'User Register Successfully',
            user
        })

    } catch (error) {
        console.log(error)
        res.status(500). send({
            success: false,
            message: 'Errro in Registeration',
            error   
        })
    }
};

//POST LOGIN
export const loginController = async (req, res) => {
    try{
        const {email, password} = req.body
            //validation
        if(!email || !password){
            return res.status(404).send({
            success: false,
            message: 'Invalid email or password'
            })
        }
        //check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success: false,
                message: 'Email is not registerd'
            })
        }
        const match = await comparePassword(password, user.password)
        if(!match){
            return res.status(200).send({
                success: false,
                message: 'Invalid Password'
            })
        }
        //token
        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {
                expiresIn: "1h",
            });
            res.status(200).send({
                success: true,
                message: "login successfully",
                user: {
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token,
        });
    }catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in login',
            error
        })
    }
};
