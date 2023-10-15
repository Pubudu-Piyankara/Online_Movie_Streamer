import React from 'react';
import './MovieList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieList = (props) => {
  return (
    <div className='movieList'>
      {props.movies.map((movie, index) => (
        <div className='movieCard' key={index}>
          <img src={movie.Poster} alt='movie'></img>
          <h3>{movie.Title}</h3>
          <div className='moviefav'>
            Add to Favourites
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
