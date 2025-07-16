const mongoose = require("mongoose");

const gallarySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    imagesUrl:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true,

    }
},
{
    timestamps:true,
}
);


const gallaryModel = mongoose.model("gallarys",gallarySchema);
module.exports = gallaryModel;