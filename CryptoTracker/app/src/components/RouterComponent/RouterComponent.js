import React from 'react';
import {  Route, Routes } from 'react-router-dom'
import CoinDetails from '../CoinDetails/CoinDetails';
import Coins from '../Coins/Coins';

export default function RouterComponent(){
    return (
        <Routes>
            <Route path='/' element={<Coins/>} />
            <Route path='/details/:id' element={<CoinDetails/>} />
        </Routes>
    );
}