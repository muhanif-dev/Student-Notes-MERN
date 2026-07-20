const { findOne } = require("../models/Note");
const User = require("../models/User");

const registerUser  = async (req, res) => {
    try {
        const { name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({
                success: false,
                message: "All fields must be fill",
            });
        }

        const existingUser  = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exist",
            })
        }

        const user = await User.create({
            name,
            email,
            password,
        });

        return res.status(201).json({
            success:true,
            message:"User registered successfully",
            data:{
                _id:user._id,
                name:user.name,
                email:user.email,
            }
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        });
        
    }
}

module.exports = {
    registerUser,
}