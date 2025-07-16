const router = require('express').Router();
const { addGallary, getGallaries, getGallary, updateGallary, deleteGallary } = require('./../controllers/gallaryController');


router.post('/',async(req,res)=>{
    try{
        const gallary = await addGallary(req.body);
        res.status(201).json({
            success:true,
            message:"Gallary created Succefully",
            gallary
        });

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })
    }
})


router.get('/',async(req,res)=>{
    try{
        const gallaries = await getGallaries();
        res.status(200).json({
            success:true,
            gallaries
        });

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })

    }
})



router.get('/:id',async(req,res)=>{
    try{
        const gallary = await getGallary(req.params.id);
         if (!gallary) return res.status(404).json({ success: false, message: "Gallary not found" });
        
        res.status(200).json({
            success:true,
            gallary
        });

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })

    }
})

router.put('/:id',async(req,res)=>{
    try{
        const gallary = await updateGallary(req.params.id,req.body);
         if (!gallary) return res.status(404).json({ success: false, message: "Gallary not found" });
       
        res.status(200).json({
            message:"Event updated Successfully!",
            success:true,
            gallary
        });

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })

    }
})


router.delete('/:id',async(req,res)=>{
    try{
        const gallary = await deleteGallary(req.params.id);
         if (!gallary) return res.status(404).json({ success: false, message: "Gallary not found" });
       
        res.status(200).json({
            message:"Gallary deleted Successfully",
            success:true,
            gallary
        });

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })

    }
})



module.exports = router;