import { useState } from "react";
import { useRef } from "react";

export default function OTP({otpLength = 6}){
    const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));

    const ref = useRef("");

    function handleKey(e, index){
        const key = e.key;
        console.log(key, e)
        const otpCopy = [...otpFields] 
        
        if(key === "Backspace"){
            otpCopy[index] = "";
            setOtpFields(otpCopy);

            if(index > 0) ref.current[index-1].focus();
        }



        otpCopy[index] = key; //update index data to key
        setOtpFields(otpCopy) //update array to show change
        
        if(index + 1 < otpFields.length) ref.current[index+1].focus() //focus on next if we arent at end
    }
    
    return(
        <div className="container">
            {
                otpFields.map((value, index) => {
                    <input
                        ref = {(currentInput)=>{ref.current[index] = current}} //gets who we are on and using pointer current 
                        key = {index}
                        value = {value}
                        type = "text"
                        maxLength = {1}
                        classname = "otp"
                        onKeyDown={(e) => handleKey(e, index)}
                    />
                })
            }
        </div>
    )
}