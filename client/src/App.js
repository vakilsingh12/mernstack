import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
import Error from './components/Error';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path='*' element={<Error/>} />
    </Routes>
    </>
  )
}

export default App