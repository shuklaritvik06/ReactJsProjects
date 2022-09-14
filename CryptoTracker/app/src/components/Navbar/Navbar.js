import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="container">
      <div className="heading">
        <p>#</p>
        <p className="coin-name">Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className="hide-mobile">Volume</p>
        <p className="hide-mobile">Mkt Cap</p>
      </div>
    </div>
  );
}
