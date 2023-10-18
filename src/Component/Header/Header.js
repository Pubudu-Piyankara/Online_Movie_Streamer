import React from 'react'
import { useNavigate } from 'react-router-dom'
//import styled from 'styled-components'
import logo from "../../Images/logo.png"
import '../Header/Header.css'

const Header = (props) => {
  const navigate = useNavigate()
 
  const handleLogoClick = () => {
    navigate('/eager')
  }

  return (
    <div className='header'>
      <div className='logo'>
        <img
          src={logo}
          className='eag'
          alt='no internet'
          onClick={handleLogoClick}
        />
      </div>
    </div>
  )
}


export default Header