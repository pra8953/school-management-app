const contactModel = require('./../models/ContactModel');


async function addContact(data) {
    try{
        const newcontact = new contactModel({...data});
        await newcontact.save();
         return newcontact.toObject();

    }catch(err){
        console.error(err);
        throw err;
    }
}


async function getContacts() {
    try{

        const contacts = await contactModel.find();
        return contacts.map((contact)=>contact.toObject());
    }catch(err){
        console.error(err);
        throw err;
    }
    
}


async function getContact(id) {
    try{

        const contact = await contactModel.findById(id);
        if(!contact) return null;
        return contact.toObject();
    }catch(err){
        console.error(err);
        throw err;
    }
    
}

async function updateContact(id,data) {
    try{

        const contact = await contactModel.findByIdAndUpdate(id,data,{new:true});
       if(!contact) return null;
       return contact.toObject();
    }catch(err){
        console.error(err);
        throw err;
    }
    
}

async function deleteContact(id) {
    try{

        const contact = await contactModel.findByIdAndDelete(id);
        if(!contact) return null;
        return contact.toObject();
    }catch(err){
        console.error(err);
        throw err;
    }
    
}

module.exports ={
    addContact,
    getContacts,
    getContact,
    updateContact,
    deleteContact
}