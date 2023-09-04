import React from 'react'
import logo from '../../Images/logo.png'
import './HomeHeader.css'
//import account from '../../Images/account.png'
//import user from '../../Images/user.png'
import {AiOutlineLogout} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
  // const [isOpen, setIsOpen] = useState(false);

  const navLink = [
    {name: 'Home', link: '/'},
    {name: 'Movies', link: '/movies'},
    {name: 'TV Shows', link: '/tvshows'},
    {name: 'Genres', link: '/genres'},
    {name: 'Latest', link: '/latest'},
    {name: 'About', link: '/about'},
  ];
  return (
    <div className='homeHeader'>
        <div className='logo'>
          <img src ={logo} className='eag'
            alt ='logo'/>

        </div>
        {/* <div >
            <button className='buttonText'>Home</button>
            <button className='buttonText'>Movies</button>
            <button className='buttonText'>TV Shows</button>
            <button className='buttonText'>Genres</button>
            <button className='buttonText'>Latest</button>
            <button className='buttonText'>About</button>     

        </div> */}

        <ul className='navLink'>
          {navLink.map((item, index) => ( 
            <li key={index}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div className='search'>
            <input className='input'
                type='text'
                placeholder='Search' />
                {/* <button className='buttonText'>Search</button> */}
        </div>

    </div>    

    
  )
}


// function DropdownItem(props) {
//   return (
//     <li className='dropDownItem'>
//       <img src={props.img} alt={props.text} />
//       <a>{props.text}</a>
//     </li>
//   );
// }


export default HomeHeader;