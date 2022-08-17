import React, { useEffect } from "react";
import "./App.css";

export default function App() {
  useEffect(getQuotes, []);  
  const [quotes, setQuotes] = React.useState(null);
  function getQuotes() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data.value);
      });
  }
  return (
    <div className="app">
      <div className="quoteContainer">
      <p>{quotes}</p>
      <button onClick={getQuotes}>Get Quote</button>
      </div>
    </div>
  );
}
