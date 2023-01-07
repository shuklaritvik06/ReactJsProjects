import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function UseEffect(){
    const [state,setState] = useState("");
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then(res=>{
            setState(res.data.title);
        });
    },[]);
    return (
        <div>
            <h1>Hello World! {state}</h1>
        </div>
    );
}