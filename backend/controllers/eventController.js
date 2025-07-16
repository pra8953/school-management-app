const eventModel = require('./../models/EventModel');


async function addEvent(data) {
    try{
        const newevent = new eventModel({...data});
        await newevent.save();
         return newevent.toObject();

    }catch(err){
        console.error(err);
        throw err;
    }
}


async function getEvents() {
    try{

        const events = await eventModel.find();
        return events.map((event)=>event.toObject());
    }catch(err){
        console.error(err);
        throw err;
    }
    
}


async function getEvent(id) {
    try{

        const event = await eventModel.findById(id);
        if(!event) return null;
        return event.toObject();
    }catch(err){
        console.error(err);
        throw err;
    }
    
}

async function updateEvent(id,data) {
    try{

        const event = await eventModel.findByIdAndUpdate(id,data,{new:true});
       if(!event) return null;
       return event.toObject();
    }catch(err){
        console.error(err);
        throw err;
    }
    
}

async function deleteEvent(id) {
    try{

        const event = await eventModel.findByIdAndDelete(id);
        if(!event) return null;
        return event.toObject();
    }catch(err){
        console.error(err);
        throw err;
    }
    
}

module.exports ={
   addEvent,
   getEvents,
   getEvent,
   updateEvent,
   deleteEvent
}