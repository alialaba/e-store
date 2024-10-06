import userModel from "../models/userModel.js";
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const createToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}


const loginUser = async (req,res) =>{
     try {
        
     } catch (error) {
        
     }
}

const registerUser = async (req,res)=>{
 try {
    const {name, email, password} = req.body;

    const userExist = await userModel.findOne({email});
    if(userExist){
        return res.json({success: false, message: "User already exist"})
    }
    if(password.length < 8){
        return res.json({success: false, message: "Please use a strong password"})
    }

    if(!validator.isEmail(email)){
        return res.json({success: false, message: "Please enter a valid email"})
    }



    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({name, email, password: hashedPassword});

    const user = await newUser.save();
    const token = createToken(user._id);

    res.json({success: true, token})
    

 } catch (error) {
    console.log(error);
    return res.json({success: false,  message: error.message})
 }
    
}

const adminLogin = async (req,res)=>{
try {
    
} catch (error) {
    
}
}

export  {loginUser, registerUser, adminLogin}