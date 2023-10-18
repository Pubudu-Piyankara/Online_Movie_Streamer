import React, { useState, useEffect } from 'react';
import HomeHeader from '../../Component/HomeHeader/HomeHeader';
import MovieListHeading from '../../Component/other/MovieListHeading';
import TVList from '../../Component/TVList/TVList';

const TVShow = () => {

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
      <div>
        <HomeHeader/>
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
  )
}

export default TVShow