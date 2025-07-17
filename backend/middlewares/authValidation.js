const joi = require('joi');



const signupValidation = async(req,res,next)=>{
    try{

        const schema = joi.object({
            name:joi.string().min(3).max(50).required(),
            email:joi.string().email().required(),
            password:joi.string().min(5).required(),
        });

        const {error} = schema.validate(req.body);

        if(error){
            return res.status(409).json({
                message:"Bad request",error,
                success:false
            })
        }
        next();
        

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })

    }
}


const loginValidation = async(req,res,next)=>{
    try{

        const schema = joi.object({
            email:joi.string().email().required(),
            password:joi.string().min(5).required()
        })

        const {error} = schema.validate(req.body);
        if(error){
            return res.status(409).json({
                success:false,
                message:"Internal Server error"
            })
        }

        next();

    }catch(err){
        res.status(500).json({
            message:"Internal Server error",
            success:false
        })
    }
}

module.exports ={
    signupValidation,
    loginValidation
}