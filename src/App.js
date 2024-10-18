import React from 'react';
import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/mainpage/MainPage'
import AboutMe from './pages/aboutMe/AboutMe';
import Experience from './pages/experience/Experience';
import Gallery from './pages/gallery/Gallery';
import Certificates from './pages/certificates/Certificates';
import Contacts from './pages/contacts/Contacts';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element = {<MainPage/>}/>
      <Route path='/aboutMe' element = {<AboutMe/>}/>
      <Route path='/experience' element = {<Experience />}/>
      <Route path='/gallery' element ={<Gallery/>}/>
      <Route path='/certificates' element={<Certificates/>} />
      <Route path='/contacts' element = {<Contacts/>} />
      </Routes>
    </div>
  );
}

export default App;
