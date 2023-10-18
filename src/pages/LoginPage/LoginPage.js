import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackgroundImage from '../../Component/BackgroundImage/BackgroundImage'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import './LoginPage.css'

const LoginPage = (props) => {

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { email, password } = event.target;

    // const response = await fetch('http://localhost:5000/login', {
    // `${process.env.REACT_APP_API_URL}/login`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email: email.value,
    //       password: password.value,
    //     }),
    //   }
    // })
    // );
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      }
    );

    const data = await response.json();
    console.log(data);
    if (data.message === "Login successful") {
      localStorage.setItem("token", data.token);
      navigate("/eager");
    }
  }

  const navigate = useNavigate()
  return (
    <div>
      <BackgroundImage />
      <div className='content'>
        <Header />
        <div className='bodyLog'>

          <div className='loginInput'>
            <h1>Log In</h1>

            <input className='input'
              type='text'
              placeholder='Email Address' />
            <input className='input'
              type='password'
              placeholder='Password' />
            <h2 className='buttonHelp'> Forgot Password? </h2>
            
            <button className='button' onClick={()=>navigate(props.LoginPage ? 'login': '/eager')} >Log In</button>

            <div className='info'>
              <h2>New to Eager?</h2>
              <button className='buttonText' onClick={()=>navigate(props.LoginPage ? 'login': '/signup')} >Sign Up now</button>
              {/* <h3>Sign Up now</h3>  */}
            </div>

            <div className='info'>
              <h4>This page is protected by Google reCAPTCHA to ensure you're not a robot </h4>
              <h5> </h5>
            </div>  

          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default LoginPage