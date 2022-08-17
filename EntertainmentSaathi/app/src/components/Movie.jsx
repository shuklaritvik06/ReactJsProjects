import React from "react";
import "../styles/Movie.css";

export default function Movie(props) {
  return (
    <div className="movie">
      <img src={props.data.Poster !== 'N/A' ? props.data.Poster : "https://via.placeholder.com/400"} alt="Avengers" />
      <div className="movie-info">
        <div className="movie-info-text">
          <div>
          <p>{props.data.Type}</p>
          <h3>{props.data.Title}</h3>
          </div>
          <div>
            <p>{props.data.Year}</p>
          </div>  
        </div>
      </div>
    </div>
  );
}
