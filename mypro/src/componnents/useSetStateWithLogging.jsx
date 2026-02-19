import { useState } from "react";
const useSetStateWithLogging =(x="")=>{
    const [value, setValue] = useState(x);
       
         setValue(x)
         console.log("current value:", value);

    return{value ,setValue}
    
}