import React from 'react';
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <nav className='navbar--container'>
          <div>
            <h3>BrowserRouter</h3>
          </div>
          <div className='navbar--container--links'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
          </div>
        </nav>
        <br />
      </main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App
