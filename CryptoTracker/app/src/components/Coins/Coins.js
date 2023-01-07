import React from 'react'
import CoinItem from '../Coinitem/Coinitem'
import Navbar from '../Navbar/Navbar'

export default function Coins({ coins }) {
  return (
    <div>
        <div className="container">
            <Navbar />
            <CoinItem />
        </div>
    </div>
  )
}
