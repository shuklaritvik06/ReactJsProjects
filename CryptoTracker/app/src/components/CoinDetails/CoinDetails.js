import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppProvider } from "../../contexts/CoinContext";
import "./CoinDetails.css";
import DOMPurify from "dompurify";
import Loader from "../Loader/Loader";

export default function CoinDetails() {
  const { id } = useParams();
  const { getCoinDetails, details, setDetails } = useContext(AppProvider);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getCoinDetails(id).then((data) => {
      setDetails(data);
      setLoading(false);
    });
  }, [id]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="coin-container">
          <div className="name">
            <h1>{details?.name}</h1>
          </div>
          <div className="coin-description">
            <p className="rank">Rank #{details?.coingecko_rank}</p>
            <div className="coin-price">
              <div className="first">
                <img
                  src={details?.image?.large}
                  alt=""
                  className="coin-image"
                />
                <p className="coin-title">{details?.name}</p>
                <p>({details?.symbol?.toUpperCase()}/USD)</p>
              </div>
              <div className="second">
                <p>$ {details?.market_data?.current_price?.usd}</p>
              </div>
            </div>
          </div>
          <div className="market_data">
            <table>
              <thead>
                <tr>
                  <td>1h</td>
                  <td>1y</td>
                  <td>7d</td>
                  <td>14d</td>
                  <td>24h</td>
                  <td>30d</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    ${" "}
                    {details?.market_data?.price_change_percentage_1h_in_currency?.usd.toFixed(
                      2
                    )}
                  </td>
                  <td>
                    ${" "}
                    {details?.market_data?.price_change_percentage_1y_in_currency?.usd.toFixed(
                      2
                    )}
                  </td>
                  <td>
                    ${" "}
                    {details?.market_data?.price_change_percentage_7d_in_currency?.usd.toFixed(
                      2
                    )}
                  </td>
                  <td>
                    ${" "}
                    {details?.market_data?.price_change_percentage_14d_in_currency?.usd.toFixed(
                      2
                    )}
                  </td>
                  <td>
                    ${" "}
                    {details?.market_data?.price_change_percentage_24h_in_currency?.usd.toFixed(
                      2
                    )}
                  </td>
                  <td>
                    ${" "}
                    {details?.market_data?.price_change_percentage_30d_in_currency?.usd.toFixed(
                      2
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="about-coin">
            <h2>About</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(details?.description?.en),
              }}
            ></p>
          </div>
        </div>
      )}
    </div>
  );
}
