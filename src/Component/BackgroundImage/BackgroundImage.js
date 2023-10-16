import React from 'react'
//import styled from 'styled-components'
import blackener from '../../Images/black-banner.jpg';
import '../BackgroundImage/BackgroundImage.css'
const BackgroundImage = () => {
  return (
    
    <div className='backImg'>
      <img src ={blackener}
      alt = 'No internet connection' 
      />

    </div>
    
  )
}
export default BackgroundImage;