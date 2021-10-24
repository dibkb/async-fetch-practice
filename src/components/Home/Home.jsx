import React, { useState } from "react";
import "./Home.css";
const Home = () => {
  const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
  const fetchMovies = async () => {
    setLoading(true);
    const randomNum = Math.ceil(Math.random() * 30);
    console.log(randomNum);
    const response = await fetch(`https://swapi.dev/api/people/${randomNum}`);
    const data = await response.json();
    setMovies((prevMovie) => [...prevMovie, data]);
    setLoading(false);
  };
  return (
    <main className="home-container">
      <div className="btn-container">
        <button className="fetch-btn" onClick={fetchMovies}>
          Fetch Movie
        </button>
      </div>
      {/* {loading && 'Loading'} */}
      <section className="info-container">
        {movies.map((item, id) => {
          return (
            <div className="info-item" key={id}>
              {item.name}
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
