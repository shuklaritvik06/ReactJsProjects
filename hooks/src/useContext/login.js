import React from 'react';
import { useContext } from 'react';
import { AppContext } from './contextHook';

export default function Login(){
const { setUsername } = useContext(AppContext);
    return (
        <>
            <input type="text" placeholder="username" onChange={(event)=>{
                setUsername(event.target.value);
            }} />
        </>
    );
}