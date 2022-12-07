
export const removeDuplicateContacts = async(array)=> {

const filterMobileNumber = (value) => value.replace(/\D/g, '').slice(-10)

let unique = []
let count=0;
unique.push(array[0]);
for(let i=0;i<array.length;i++){
    for(let j = i+1; j<array.length;j++)
    {
        if(filterMobileNumber(array[i])===filterMobileNumber(array[j])){
                    
            let z=0;
            for(let key of unique){
                if(filterMobileNumber(array[i])==filterMobileNumber(key)){                    
                    z++;
                }
            }  
            if(z==0){
                unique.push(filterMobileNumber(array[i]))
            }        
        }
        else{
            let z =0;
            for(let key of unique){
                if(filterMobileNumber(array[j])==filterMobileNumber(key)){                    
                    z++;
                }
            }  
            if(z==0){
                unique.push(array[j])
            }     
        }
    }
}

    return unique;
}

// let array = [];

// for (let key of contactList) {
//   array.push(key.replace(/\D/g, '').slice(-10))
// }
// const data = array.filter((value, index) => array.indexOf(value) === index);
// console.log("Filter: ", data);





