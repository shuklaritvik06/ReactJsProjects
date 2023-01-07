import React, { useEffect,useState } from 'react';
import { useMemo } from 'react';

export default function UseMemo(){
    const [data,setData] = useState([]);
    const [toggle,setToggle] = useState(false);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setData(data)) 
    },[]);
    useMemo(()=>{
        for(let i=0;i<data.length;i++){
            console.log(data[i].name);
        }
    },[data]);
    return (
        <div>
            <h1>UseMemo</h1>
            <button onClick={()=>{
                setToggle(!toggle);
            }}>Toggle</button>
            {toggle && <p>Hello World!</p>}
       </div>
    );
}