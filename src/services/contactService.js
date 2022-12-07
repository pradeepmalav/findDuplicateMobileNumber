
import { ContactsModel } from '../model/contactModel.js';
import { removeDuplicateContacts } from '../helper/removeDuplicateMobileNumber.js';

export const contactSr = async (req) => {
    const { contacts } = req.body || req.query;

    // final array to object and store individually in contacts collection
   const finalData = async(finalArray)=>{
    const updatedPayload = finalArray.map((d) => {
        return {
            mobileNumber: d
        }
    });
        return updatedPayload;

   }
       
    const filterMobileNumber = (value) => value.replace(/\D/g, '').slice(-10)

    const unique = await removeDuplicateContacts(contacts);
    const test = await ContactsModel.find({});
    if(test.length){

        const listData = async (unique,test) => {
            let a1 = [];
            for (let i = 0; i < unique.length; i++) {
                for (let j = 0; j < test.length; j++) {
                        if (filterMobileNumber(test[j].mobileNumber) === filterMobileNumber(unique[i])) {
                            a1.push(unique[i]);
                        }
                }
            }
            let difference = unique.filter(x => !a1.includes(x));
            return difference
        }
        const finalArray = await listData(unique,test);    
    
        const updatedPayload = await finalData(finalArray);
        const data = await ContactsModel.insertMany(updatedPayload);
        return data;
    }
    else{
        const updatedPayload = await finalData(unique);
        const data = await ContactsModel.insertMany(updatedPayload);
        return data;
    }
    
}