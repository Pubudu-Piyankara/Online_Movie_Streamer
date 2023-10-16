import React from 'react'
//import { useNavigate } from 'react-router-dom'
import logo from "../../Images/logo.png"
import fb from '../../Images/fb.png'
import gt from '../../Images/github.png'
import tw from '../../Images/twiter.png'
import li from '../../Images/linkedIn.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='logo'>
          <img src ={logo} 
        alt ='no internet'/>
        <h1> Help | About | Contact Us | Privacy | FAQ </h1>
        </div>
        <div className='footImg'>
          
          <h1>Eager is a cutting-edge movie streaming website 
            that provides an extensive collection of films across genres.
             With its user-friendly interface, high-quality streaming
              options, and personalized recommendations, Eager offers
               a seamless cinematic experience. Users can engage in 
               discussions, rate movies, and enjoy both free and premium 
               subscription plans. The platform is accessible on various 
               devices, making it convenient for users to enjoy their 
               favorite movies anytime, anywhere.</h1>
              
        <img src ={fb} 
        alt ='no internet'/>
         <img src ={gt} 
        alt ='no internet'/>
         <img src ={tw} 
        alt ='no internet'/>
         <img src ={li} 
        alt ='no internet'/>
          
        </div>
        {/* <button className='button' onClick={()=>navigate(props.login ? '/login' : '/signup')}>
        Log In
        
        </button> */}
      </div>
  )
}

export default Footer;