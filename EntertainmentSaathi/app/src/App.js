import React from "react";
import SearchIcon from "./assets/search.svg";
import { useEffect } from "react";
import Movie from "./components/Movie";
import "./styles/App.css";

const BASE_URL = "http://www.omdbapi.com/?apikey=39f85447";

export default function App() {
  const [movies, setMovies] = React.useState([]);
  const [search, setSearch] = React.useState("");

  function searchMovies(title) {
    fetch(`${BASE_URL}&s=${title}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.Search);
      });
  }
  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="app">
      <h1>Entertainment Register</h1>
      <div className="searchMovies">
        <input
          type="text"
          placeholder="Search a keyword"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="Search Button"
          id="search"
          onClick={() => searchMovies(search)}
        ></img>
      </div>
      { movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <Movie key={movie.imdbID} data={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No data found</h2>
        </div>
      )
     }
    </div>
  );
}
