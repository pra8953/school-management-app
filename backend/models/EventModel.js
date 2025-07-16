const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true
    },
    shortDescription:{
        type:String,
        required:true,

    },
    date:{
        type:Date,
        required:true
    },
    location:{
        type:String,
        required:true
    }
},
{
    timestamps:true,
}
);


const eventModel = mongoose.model("events",eventSchema);
module.exports = eventModel;