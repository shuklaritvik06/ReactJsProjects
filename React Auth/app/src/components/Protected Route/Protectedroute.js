import React from 'react'
import { Navigate } from 'react-router-dom';

export default function Protectedroute({children}) {
  if(!document.cookie.includes("user")){
    return <Navigate to="/login" />
  }
  return (
    <div>
        {children}
    </div>
  )
}
