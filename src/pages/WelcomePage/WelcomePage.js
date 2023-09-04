import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackgroundImage from '../../Component/BackgroundImage/BackgroundImage'
import Header from '../../Component/Header/Header'
import Multi from '../../Images/multi.jpg'
import Recommend from '../../Images/recommend.jpg'
import Social from '../../Images/social.jpg'
import './WelcomePage.css';
import Footer from '../../Component/Footer/Footer'

const WelcomePage = (props) => {
  const navigate = useNavigate()
  return (
    <div>
    <BackgroundImage />
    <div className='content'>
    <Header login  />
      <div className='body'>
        <div className='text'>
            
          <h1>Experience the world of Movies and TV shows with Eager</h1>
          
        </div>
        <div className='form'>
            <button className='button' onClick={()=>navigate(props.WelcomePage ? 'welcomepage' : '/login')}>Get Started </button>
        </div>
      </div>
    </div>
    <div className='multi'>
        <h1>Multi Device Streaming</h1>
        <img src={Multi} alt='none' className='imgPad'/>
    </div>
    <div className='recommend'>
      <img src={Recommend} alt='none' className='imgPad'/>
        <h1>Movie Recommendation</h1>
        
    </div>
    <div className='social'>
        <h1>Social Community</h1>
        <img src={Social} alt='none' className='imgPad'/>
    </div>
    
    <Footer />
  </div>
  )
}

export default WelcomePage