import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Movie from './Pages/Movie';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  );
}

export default App;