import React, { useState } from 'react';
import HomeHeader from '../../Component/HomeHeader/HomeHeader'
import './Eager.css'
import axios from 'axios';


//import BackgroundImage from '../../Component/BackgroundImage/BackgroundImage'

const Eager = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/movies?query=${searchQuery}`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <><div>
      {/* <BackgroundImage /> */}
      <div className='contentEager'>
        <HomeHeader className='headerEager' />

        <div className='bodyEager'>  </div>
      </div>
    </div><div className="App">
        <h1>Movie Search App</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a movie"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="movie-list">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img src={movie.Poster} alt={movie.Title} />
              <h2>{movie.Title}</h2>
              <p>Year: {movie.Year}</p>
            </div>
          ))}
        </div>
      </div></>
  )
}

export default Eager