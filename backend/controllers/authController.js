const userModel = require('./../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async(req,res)=>{
    try{
        const {name,email,password}  = req.body;
        const userExits = await userModel.findOne({email});
        if(userExits){
            return res.status(409).json({
                success:false,
                message:"User already exists, please login"
            })
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        });
        await newUser.save();
        res.status(201).json({
            success:true,
            message:"User signup successfully"
        })

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}


const login = async(req,res)=>{
    try{
        const {email,password} = req.body;

        const userExists = await userModel.findOne({email});
        if(!userExists){
            return res.status(401).json({
                success:false,
                message:"Email or password is incorrect"
            })
        }

        const isMatch = await bcrypt.compare(password,userExists.password);
        if(!isMatch){
            return res.status(409).json({
                message:"password are invalid",
                success:false
            })
        }
        const jwtToken = jwt.sign(
            {
                email:userExists.email,
                name:userExists.name,
                _id:userExists._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn:'1d'
            }
        )
        res.status(200).json({
            success:true,
            message:"Login successfully",
            user:{
                name:userExists.name,
                email:userExists.email,
                _id:userExists._id
            },
            token:jwtToken



        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })

    }
}


module.exports = {
    signup,
    login
}