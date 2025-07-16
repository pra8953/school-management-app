const gallaryModel = require('./../models/GallaryModel');


async function addGallary(data) {
    try{
        const newgallary = new gallaryModel({...data});
        await newgallary.save();
         return newgallary.toObject();

    }catch(err){
        console.error(err);
        throw err;
    }
}


async function getGallaries() {
    try{

        const gallaries = await gallaryModel.find();
        return gallaries.map((gallary)=>gallary.toObject());
    }catch(err){
        console.error(err);
        throw err;
    }
    
}


async function getGallary(id) {
    try{

        const gallary = await gallaryModel.findById(id);
        if(!gallary) return null;
        return gallary.toObject();
    }catch(err){
        console.error(err);
        throw err;
    }
    
}

async function updateGallary(id,data) {
    try{

        const gallary = await gallaryModel.findByIdAndUpdate(id,data,{new:true});
       if(!gallary) return null;
       return gallary.toObject();
    }catch(err){
        console.error(err);
        throw err;
    }
    
}

async function deleteGallary(id) {
    try{

        const gallary = await gallaryModel.findByIdAndDelete(id);
        if(!gallary) return null;
        return gallary.toObject();
    }catch(err){
        console.error(err);
        throw err;
    }
    
}

module.exports ={
  addGallary,
  getGallaries,
  getGallary,
  updateGallary,
  deleteGallary
}