import React from 'react'
import './NavigationBar.css'
//import SearchBox from '../other/SearchBox';
// import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
//import MovieList from '../../Component/MovieList/MovieList';
// import Search from '../Search/Search';


const NavigationBar = (props) => {

    // const [movies, setMovies] = useState([]);

//  const [searchValue, setSearchValue] = useState('');
 

//  const getMovieRequest = async (searchValue) => {
//     const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=679cbfc1`;
//     // const url = `https://api.themoviedb.org/3/discover/movie?s=${searchValue}&apikey=c1fcc16a1073776c38f907c1106c96eb`;
//     // const url = `https://api.themoviedb.org/3/search/movie?api_key=c1fcc16a1073776c38f907c1106c96eb&query=${searchValue}`;
 
//     const response = await fetch(url);
//     const responseJson = await response.json();

//     if (responseJson.Search) {
//       setMovies(responseJson.Search);
//     }
//   };

//   useEffect(() => {
//     getMovieRequest(searchValue);
//   }, [searchValue]);

const navigate = useNavigate()

  return (
    <div>   
        <div className='navBar'>
            <nav>
                <ul className='navLink'>    

                    <li><a href='/eager' onClick={() => navigate(props.Eager ? 'eager' : '/login')}>Home</a></li>
                    <li><a href='/movie'>Movies</a></li>
                    <li><a href='/tv'>TV</a></li>
                    <li><a href='/genres'>Genres</a></li>
                    <li><a href='/trending'>Trending</a></li>
                    <li><a href='/about'>About</a></li>
                </ul>
            </nav>
            <div className='row'>
              
              {/* <SearchBox/> */}
              {/* <Search searchResults={movies} /> */}
              
            </div>
            {/* <SearchBox className='searchBox' searchValue={searchValue} setSearchValue={setSearchValue} /> */}
        </div>
    </div>
  )
}



export default NavigationBar