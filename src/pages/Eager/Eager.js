import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeHeader from '../../Component/HomeHeader/HomeHeader';
import Footer from '../../Component/Footer/Footer';
import MovieList from '../../Component/MovieList/MovieList';
import MovieListHeading from '../../Component/other/MovieListHeading'; 
import TVList from '../../Component/TVList/TVList';
// Corrected import path
import './Eager.css';


const Eager = () => {
  // const [movies, setMovies] = useState([]);
  // const [searchValue, setSearchValue] = useState('');
  const[movieList,setMovieList]=useState([]);


  //Movies are fetched from the API(search option)
  // const getMovieRequest = async (searchValue) => {
  //   const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=679cbfc1`;
  //   // const url = `https://api.themoviedb.org/3/discover/movie?s=${searchValue}&apikey=c1fcc16a1073776c38f907c1106c96eb`;
  //   // const url = `https://api.themoviedb.org/3/search/movie?api_key=c1fcc16a1073776c38f907c1106c96eb&query=${searchValue}`;
 
  //   const response = await fetch(url);
  //   const responseJson = await response.json();

  //   if (responseJson.Search) {
  //     setMovies(responseJson.Search);
  //   }
  // };

  // useEffect(() => {
  //   getMovieRequest(searchValue);
  // }, [searchValue]);

  //Here get movie request is called
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

  //Here tv show request is called
  const[tvList,setTVList]=useState([]);

  const getTV =()=>{
    fetch('https://api.themoviedb.org/3/discover/tv?api_key=c1fcc16a1073776c38f907c1106c96eb')
    .then((response)=>response.json())
    .then((json)=>{
      setTVList(json.results);
    }
    )
  }
  useEffect(()=>{
    getTV()
  },[])
  console.log(tvList);



  return (
    <div>
      <div className='contentEager'>
        <HomeHeader className='headerEager' />
        <div className='bodyEager'>
          <div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
               {/* Pass heading as a prop */}
            </div>
            <div >
              
              {/* <input
                type='text'
                className='searchBox'
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder='Search...'/>
			         <MovieList movies={movies} /> */}
              
              
            </div>
            <div>
              <div>
                <MovieListHeading heading='Movies' />
              </div>
              {/* {movieList.map((movie)=>(
                <img className='poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie" />
              ))} */}
              <MovieList movies={movieList} />
            </div>
            <div className='homeTV'>
              <div>
              <MovieListHeading heading='TV Shows' />
              </div>
            {/* {tvList.map((tv)=>(
                <img className='poster' src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} alt="tv" />
                ))} */}
                <TVList tv={tvList} />
            </div>
          </div>
          <Footer className='footerEager'/>
        </div>
      </div>
     
    </div>
  );
};

export default Eager;
