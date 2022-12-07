
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    mobileNumber: String,
    Contacts: String
})

export const ContactsModel = mongoose.model('contacts',contactSchema);
