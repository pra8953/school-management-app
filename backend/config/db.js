const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_URI;


async function connectDb() {
    try{
        await mongoose.connect(mongo_url);
        console.log("Db connected successfully!")
    }catch(err){
        console.error(err);
    }
    
}
module.exports = connectDb;