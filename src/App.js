import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Player from './pages/Player/Player';
import TVShow from './pages/TVShow/TVShow';
import MoviePage from './pages/MoviePage/MoviePage';
import Eager from './pages/Eager/Eager';
//import BackgroundImage from './Component/BackgroundImage';
//import Header from './Component/Header';
import WelcomePage from './pages/WelcomePage/WelcomePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path = '/login' element={<LoginPage/>}/>
      <Route exact path = '/signup' element={<SignUpPage/>}/>
      <Route exact path = '/player' element={<Player/>}/>
      <Route exact path = '/tv' element={<TVShow/>}/>
      <Route exact path = '/movie' element={<MoviePage/>}/>
      <Route exact path = '/eager' element={<Eager/>}/>
      <Route exact path = '/welcomepage' element={<WelcomePage/>}/>
         
      
    </Routes>
    {/* <Header/> */}
    {/* <BackgroundImage/> */}
    </BrowserRouter>
  );
}

export default App;
