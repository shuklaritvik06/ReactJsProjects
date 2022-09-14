import React from 'react';
import { useRef } from 'react';

export default function UseRef(){
    const inputRef = useRef(null);
    return (
        <div>
            <h1>Hello World!</h1>
            <input ref={inputRef}></input>
            <button onClick={()=>{
                inputRef.current.value = "Hello World!";
            }}>Hello World!</button>
        </div>
    );
}