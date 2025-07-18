const router = require('express').Router();
const {
     addContact, getContacts ,getContact, updateContact, deleteContact
    } = require('./../controllers/contactController');

const verifyToken = require('./../middlewares/verifyToken');
const contactValidation = require('../validators/contactValidaton');

router.post('/',contactValidation,async(req,res)=>{
    try{
        const contact = await addContact(req.body);
        res.status(201).json({
            success:true,
            message:"Thanks for connecting ,we connect ASAP!",
            contact
        });

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })
    }
})


router.get('/',verifyToken,async(req,res)=>{
    try{
        const contacts = await getContacts();
        res.status(200).json({
            success:true,
            contacts
        });

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })

    }
})



router.get('/:id',verifyToken,async(req,res)=>{
    try{
        const contact = await getContact(req.params.id);
         if (!contact) return res.status(404).json({ success: false, message: "Contact not found" });
        
        res.status(200).json({
            success:true,
            contact
        });

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })

    }
})

router.put('/:id',verifyToken,contactValidation,async(req,res)=>{
    try{
        const contact = await updateContact(req.params.id,req.body);
         if (!contact) return res.status(404).json({ success: false, message: "Contact not found" });
       
        res.status(200).json({
            message:"Contact updated Successfully!",
            success:true,
            contact
        });

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })

    }
})


router.delete('/:id',verifyToken,async(req,res)=>{
    try{
        const contact = await deleteContact(req.params.id);
         if (!contact) return res.status(404).json({ success: false, message: "Contact not found" });
       
        res.status(200).json({
            message:"User deleted Successfully",
            success:true,
            contact
        });

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })

    }
})



module.exports = router;