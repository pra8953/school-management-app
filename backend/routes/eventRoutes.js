const router = require('express').Router();
const {addEvent,getEvents, getEvent, updateEvent, deleteEvent } = require('./../controllers/eventController');


router.post('/',async(req,res)=>{
    try{
        const event = await addEvent(req.body);
        res.status(201).json({
            success:true,
            message:"Event created Succefully",
            event
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
        const events = await getEvents();
        res.status(200).json({
            success:true,
            events
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
        const event = await getEvent(req.params.id);
         if (!event) return res.status(404).json({ success: false, message: "Event not found" });
        
        res.status(200).json({
            success:true,
            event
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
        const event = await updateEvent(req.params.id,req.body);
         if (!event) return res.status(404).json({ success: false, message: "Event not found" });
       
        res.status(200).json({
            message:"Event updated Successfully!",
            success:true,
            event
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
        const event = await deleteEvent(req.params.id);
         if (!event) return res.status(404).json({ success: false, message: "Event not found" });
       
        res.status(200).json({
            message:"Event deleted Successfully",
            success:true,
            event
        });

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })

    }
})



module.exports = router;