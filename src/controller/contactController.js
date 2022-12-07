
import { contactSr } from "../services/contactService.js"

export const contactlist = async(req,res)=>{
    
    if(Object.keys(req.body).length==1 || Object.keys(req.query).length==1){
        
    const data = await contactSr(req);
    
    if(data.length){
        res.status(200).json({
            success:true,
            result:data,
            message:"Contacts inserted"
        })
    }
    else{
        res.status(400).json({
            success:false,
            message:"Duplicate Contacts"
        })
    }            
    }

    else{
        res.status(400).json({
            success:false,
            message:"Parameter required"
        })
    }

}