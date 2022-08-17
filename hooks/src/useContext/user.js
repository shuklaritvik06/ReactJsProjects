import React from 'react';
import { useContext } from 'react';
import { AppContext } from './contextHook';

export default function User(){
const { username } = useContext(AppContext);
    return (
        <>
            <p>{username}</p>
        </>
    );
}