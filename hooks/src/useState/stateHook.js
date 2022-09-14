import React from "react";
import { useState } from "react";


export default function UseStateHook(){
    const [count, setCount] = useState(0);
    function increment(){
        setCount(count+1);
    }
    function decrement(){
         setCount(count-1);    
    }
    return (
        <div>
            <button onClick={decrement}>
                -
            </button>
            <h1>{count}</h1>
            <button onClick={increment}>
                +
            </button>
        </div>
    );
}