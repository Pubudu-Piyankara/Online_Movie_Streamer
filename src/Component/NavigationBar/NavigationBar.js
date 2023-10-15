// import React from 'react'
import './NavigationBar.css'
import SearchBox from '../other/SearchBox';
import React, { useState  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const NavigationBar = (props) => {

 const [searchValue, setSearchValue] = useState('');
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
                    <li><a href='/latest'>Latest</a></li>
                    <li><a href='/about'>About</a></li>
                </ul>
            </nav>
            <SearchBox className='searchBox' searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
    </div>
  )
}



export default NavigationBar