import React from "react";
import "./Loader.css";
import { Puff } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <div className="loader">
        <Puff color="#00bcd4" height={80} width={80} />
      </div>
    </div>
  );
}
