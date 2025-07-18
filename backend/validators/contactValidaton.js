const joi = require('joi');

const contactValidation = async(req,res,next)=>{
    try{
        const schema = joi.object({
            name:joi.string().min(3).max(50).required(),
            email:joi.string().email().required(),
            phone: joi.string().length(10).pattern(/^[0-9]+$/).required(),
            subject:joi.string().required(),
            message:joi.string().required(),
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
            message:"Internal server error",
            success:false
        })

    }
}

module.exports = contactValidation;