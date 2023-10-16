import React from 'react';
import './MovieList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieList = (props) => {
  return (
    <div>
      <div className='movieList'>
        {/* {props.movies.map((movie, index) => (
          <div className='movieCard' key={index}>
            <img src={movie.Poster} alt='movie'></img>
            <h3>{movie.Title}</h3>
            <div className='moviefav'>
              Add to Favourites
            </div>
          </div>
        ))} */}
      </div>

      <div className='movieList'>
        {props.movies.map((movie, index) => (
          <div className='movieCard' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}alt='movie'></img>
            <h3>{movie.original_title}</h3>
            <h3>{movie.release_date}</h3>
            <h3>{movie.vote_average}</h3>
            <h3>{movie.overview}</h3>
            <h3>{movie.popularity}</h3>
            <h3>{movie.vote_count}</h3>
            <h3>{movie.original_language}</h3>
            <h3>{movie.adult}</h3>
            
            
            <h3>{movie.video}</h3>
            <h3>{movie.name}</h3>
            <h3>{movie.first_air_date}</h3>

            <h3>{movie.profile_path}</h3>

            <div className='moviefav'>
              Add to Favourites
            </div>
          </div>
        ))}
      </div>

      


    </div>
  );
};

export default MovieList;

