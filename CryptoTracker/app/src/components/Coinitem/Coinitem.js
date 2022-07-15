import React, { useContext, useEffect } from "react";
import { AppProvider } from "../../contexts/CoinContext";
import "./Coinitem.css";
import { useNavigate } from "react-router-dom";

export default function CoinItem() {
  const { getCoins, setCoins, coin } = useContext(AppProvider);
  const navigate = useNavigate();
  useEffect(() => {
    getCoins().then((data) => {
      setCoins(data);
    });
  }, []);
  return (
    <>
      {coin.map((item) => {
        return (
          <div className="coin-row" key={item.id} onClick={()=>{
              navigate(`/details/${item.id}`);
          }}>
            <p>{item.market_cap_rank}</p>
            <div className="logo">
              <img src={item.image} alt="" />
            </div>
            <p>$ {item.current_price}</p>
            <p>{item.price_change_percentage_24h.toFixed(2)}%</p>
            <p className="hide-mobile">${item.total_volume.toLocaleString()}</p>
            <p className="hide-mobile">${item.market_cap.toLocaleString()}</p>
          </div>
        );
      })}
    </>
  );
}
