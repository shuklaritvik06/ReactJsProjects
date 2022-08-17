import React, { useState } from 'react';
import { createContext } from 'react';
import Login from './login';
import User from './user';

export const AppContext = createContext(null);

export default function UseContext(){
    const [username,setUsername] = useState("");
    return (
        <AppContext.Provider value={{username,setUsername}}>
          <Login />
          <User />
       </AppContext.Provider>
    );
}