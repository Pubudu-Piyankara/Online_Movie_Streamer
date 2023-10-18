// import e from "express";
// import React from "react";
import { useState, useEffect } from "react";
import HomeHeader from "../../Component/HomeHeader/HomeHeader";
import MovieListHeading from "../../Component/other/MovieListHeading";
// import TrendingList from "../../Component/TrendingList/TrendingList";
import "./Trending.css";
import TVList from "../../Component/TVList/TVList";


const Trending = () => {
    const [trending, setTrending] = useState([]);

    const getTrending = () => {
        fetch(
            "https://api.themoviedb.org/3/trending/all/day?api_key=c1fcc16a1073776c38f907c1106c96eb"
        )
            .then((response) => response.json())
            .then((json) => {
                setTrending(json.results);
            });
    };
    useEffect(() => {
        getTrending();
    }, []);
    console.log(trending);
    return (
        <div>
            <div>
                <HomeHeader />
            </div>
            <div className="homeTrending">
                <div>
                    <MovieListHeading heading="Trending" />
                </div>
                {/* {trending.map((trend) => (
                    <img
                        className="poster"
                        src={`https://image.tmdb.org/t/p/w500/${trend.poster_path}`}
                        alt="trend"
                    />
                ))} */}
                {/* <TrendingList trending={trending} /> */}
                <TVList tv={trending} />
            </div>
        </div>
    );
  
};

export default Trending;
