import React from 'react'
import {  Route,Routes } from 'react-router-dom'
import Cart from '../Cart/Cart'
import Home from '../Home/Home'


export default function RouteComponent() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
    </div>
  )
}
