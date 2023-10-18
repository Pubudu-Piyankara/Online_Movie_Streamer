import React, { useState, useEffect } from 'react';
import Footer from '../../Component/Footer/Footer';
import HomeHeader from '../../Component/HomeHeader/HomeHeader';
import MovieList from '../../Component/MovieList/MovieList';
import MovieListHeading from '../../Component/other/MovieListHeading';

const MoviePage = () => {

  const[movieList,setMovieList]=useState([]);

  const getMovie =()=>{
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=c1fcc16a1073776c38f907c1106c96eb')
    .then((response)=>response.json())
    .then((json)=>{
      setMovieList(json.results);
    }
    )
  }

  useEffect(()=>{
    getMovie()
  },[])
  console.log(movieList);


  return (
    <div>
      <div>
        <HomeHeader/>
      </div>
      <div>
        <div className='heading'>
          <MovieListHeading heading='Movies' />
        </div>
              {/* {movieList.map((movie)=>(
                <img className='poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie" />
              ))} */}
              <MovieList movies={movieList} />
      </div>

              <Footer className='footerEager'/>
    </div>
  )
}

export default MoviePage