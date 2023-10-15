import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeHeader from '../../Component/HomeHeader/HomeHeader';
import MovieList from '../../Component/MovieList/MovieList';
import MovieListHeading from '../../Component/other/MovieListHeading'; // Corrected import path
import './Eager.css';

const Eager = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=679cbfc1`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div>
      <div className='contentEager'>
        <HomeHeader className='headerEager' />
        <div className='bodyEager'>
          <div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
              <MovieListHeading heading='Movies' /> {/* Pass heading as a prop */}
            </div>
            <div className='row'>
              
              <input
                type='text'
                className='searchBox'
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder='Search...'
              />
			  <MovieList movies={movies} />
              {/* You might want to add a component to handle the search input */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eager;
