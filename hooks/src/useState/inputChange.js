import React from "react";
import { useState } from "react";

export default function InputData(){
    const [inputValue,setInputValue] = useState("");
    function handleChange(e){
        setInputValue(e.target.value);
    }
    return (
        <div>
            <input type="text" onChange={handleChange}/>
            <p>{inputValue}</p>
        </div>    
    )
}