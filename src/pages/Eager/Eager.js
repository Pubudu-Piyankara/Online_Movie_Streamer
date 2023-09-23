import React from 'react'
import HomeHeader from '../../Component/HomeHeader/HomeHeader'
import './Eager.css'
import navbar from '../../Component/navBar/navBar'
//import BackgroundImage from '../../Component/BackgroundImage/BackgroundImage'

const Eager = () => {
  return (
    <div>
      {/* <BackgroundImage /> */}
    <div className='contentEager'>
      <HomeHeader className='headerEager' />
      <navbar className='navEager' />
      <div className='bodyEager'>  </div>
    </div>
    </div>
  )
}

export default Eager