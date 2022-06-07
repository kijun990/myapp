import React from 'react';
import Home from './routes/Home';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Navi from './components/Navi';
import Detail from './routes/Detail';

import Movie from './components/Movie.js';

function App () {
  return (
    <HashRouter>
      <Navi />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/movie-detail" element={<Detail />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
