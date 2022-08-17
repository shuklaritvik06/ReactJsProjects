import React from 'react';
import { useLayoutEffect,useEffect } from 'react';

export default function UseLayoutEffectHook(){
    useLayoutEffect(()=>{
        console.log("useLayoutEffect");
    },[]);
    useEffect(()=>{
        console.log("useEffect");
    },[]);
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    );
}