import React, { useState, useEffect } from 'react';
import './Search.css';
// import React from 'react';

const Search = ({ searchValue, setSearchValue }) => {

    
    //const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

//     const handleSearch = async (search) => {
//         const url = `https://api.themoviedb.org/3/search/multi?=${search}&api_key=c1fcc16a1073776c38f907c1106c96eb`;  
        
//         const response = await fetch(url);
//         const responseJson = await response.json();
//         if (responseJson.Search) {
//                 setSearchResults(responseJson.Search);
//               }
//     };

    
//     useEffect(() => {
//     handleSearch(search);
//   }, [search]);

  const searchItem=()=>{
    fetch('https://api.themoviedb.org/3/search/multi?api_key=c1fcc16a1073776c38f907c1106c96eb')
    .then((response)=>response.json())
    .then((json)=>{
      setSearchResults(json.results);
    }
    )
    }
    useEffect(()=>{
      searchItem()
    },[])
    console.log(searchResults);


    return (
        <div>
           {/* <input
                type='text'
                className='searchBox'
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search...'/> */}

            <div className='sample'>
			    <input
				    type='text'
				    className='control'
				    value={searchValue}
				    onChange={(event) => setSearchValue(event.target.value)}
				    placeholder='Search...'
			    ></input>
		</div>
        </div>
    )
}

export default Search;
