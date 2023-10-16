import React from 'react'
import logo from '../../Images/logo.png'
import './HomeHeader.css'
import NavigationBar from '../../Component/NavigationBar/NavigationBar'
//import account from '../../Images/account.png'
//import user from '../../Images/user.png'
// import {AiOutlineLogout} from 'react-icons/ai'
// import { Link } from 'react-router-dom'

const HomeHeader = () => {
 
  return (
    <div className='homeHeader'>
      <div className='logo'>
        <img src ={logo} className='eag'
           alt ='logo'/>

      </div>
      <NavigationBar className='navEager' />
       

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