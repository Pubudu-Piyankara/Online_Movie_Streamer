import React from 'react';
import './TVList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const TVList = (props) => {
    
   

    return (
        <div>
            <div className='tvList'>
        {props.tv.map((tv, index) => (
          <div className='tvCard' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}alt='tv'></img>
            <h3>{tv.name}</h3>
            <h3>{tv.first_air_date}</h3>
            <h3>{tv.vote_average}</h3>
            <h3>{tv.overview}</h3>
            <h3>{tv.popularity}</h3>
            <h3>{tv.vote_count}</h3>
            <h3>{tv.original_language}</h3>
            <h3>{tv.adult}</h3>
            <h3>{tv.video}</h3>
            <h3>{tv.name}</h3>
            <h3>{tv.profile_path}</h3>

            <div className='tvfav'>
              Add to Favourites
            </div>
          </div>
        ))}
        </div>
        </div>
    );
};

export default TVList;
