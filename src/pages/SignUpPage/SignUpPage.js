import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackgroundImage from '../../Component/BackgroundImage/BackgroundImage'
//import styled from'styled-components'
import Header from '../../Component/Header/Header'
import './SignUpPage.css'
import Footer from '../../Component/Footer/Footer'  

const SignUpPage = (props) => {
  const navigate = useNavigate()
  // const [showPassword, setShowPassword] = useState(false)

  return (
    <div>
      <BackgroundImage/>
      <div className='contentSignUp'>
        <Header/>
        <div className='bodySign'>
          <div className='signInput'>
            <h1>Sign Up</h1>
            <input className='input'
            type='text'
            placeholder='First Name' />
            <input className='input'
            type='text'
            placeholder='Last Name' />
            <input className='input'
            type='text'
            placeholder='Email Address' />
            <input className='input'
            type='password'
            placeholder='Password' />
            <input className='input'
            type='password'
            placeholder='Confirm Password' />
          </div>

          <div className='info'>
            <input type='checkbox' />
            <h2>I agree to the Terms of Use and Privacy Policy</h2>
          </div>
            
          
          <div className='form'>
            <button className='button'>Sign Up</button>
          </div>

          <div className='info'>
            <h2>Already have an account?</h2>
            <button className='buttonText' onClick={()=>navigate(props.SignUpPage  ? 'signup': '/login')} >Log In  now</button>
            {/* <h3>Log In now</h3> */}
          </div>

        </div>
        <Footer className='footer'/>
      </div>
    </div>
  )
}



export default SignUpPage